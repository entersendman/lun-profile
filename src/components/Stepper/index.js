import React from 'react';
import StepButtomContainer from '../../components/StepButtonContainer';
import StepButton from '../../components/StepButton';
import FirstStep from '../../containers/FirstStep';
import SecondStep from '../../containers/SecondStep';
import ThirdStep from '../../containers/ThirdStep';
import FourthStep from '../../containers/FourthStep';
import FinalCard from '../../containers/FinalCard';

const STEPS = ['1', '2', '3', '4'];

const getSteps = () => STEPS;

class Stepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  };

  getStepContent = step => {
    switch (step) {
    case 0:
      return <FirstStep
        handleComplete={this.handleComplete}
      />;
    case 1:
      return <SecondStep
        handleBack={this.handleBack}
        handleComplete={this.handleComplete}
      />;
    case 2:
      return <ThirdStep
        handleBack={this.handleBack}
        handleComplete={this.handleComplete}
      />;
    case 3:
      return <FourthStep
        handleComplete={this.handleComplete}
        handleBack={this.handleBack}
      />;
    default:
      return <FirstStep
        handleNext={this.handleNext}
      />;
    }
  };

  totalSteps = () => getSteps().length;

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleStep = step => () => {
    const availableSteps = Object.values(this.state.completed);
    if (availableSteps[step]) {
      this.setState({
        activeStep: step,
      });
    }
  };

  handleComplete = () => {
    const {completed} = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  };

  completedSteps = () => Object.keys(this.state.completed).length;

  isLastStep = () => this.state.activeStep === this.totalSteps() - 1;

  allStepsCompleted = () => this.completedSteps() === this.totalSteps();

  render() {

    const steps = getSteps();
    const {activeStep, completed} = this.state;

    return (
      <div>
        {!this.allStepsCompleted() && (
          <StepButtomContainer
          >
            {steps.map((label, index) => (
              <StepButton
                key={index}
                onClick={this.handleStep(index)}
                completed={completed[index]}
                label={label}
              >
              </StepButton>
            ))}
          </StepButtomContainer>
        )}
        {
          this.allStepsCompleted()
            ? (<FinalCard handleReset={this.handleReset}/>)
            : (this.getStepContent(activeStep))
        }
      </div>
    );
  }
}

export default Stepper;
