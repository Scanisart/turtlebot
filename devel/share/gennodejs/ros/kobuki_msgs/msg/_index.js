
"use strict";

let RobotStateEvent = require('./RobotStateEvent.js');
let SensorState = require('./SensorState.js');
let Led = require('./Led.js');
let DigitalOutput = require('./DigitalOutput.js');
let MotorPower = require('./MotorPower.js');
let PowerSystemEvent = require('./PowerSystemEvent.js');
let WheelDropEvent = require('./WheelDropEvent.js');
let BumperEvent = require('./BumperEvent.js');
let ControllerInfo = require('./ControllerInfo.js');
let Sound = require('./Sound.js');
let DockInfraRed = require('./DockInfraRed.js');
let ButtonEvent = require('./ButtonEvent.js');
let ScanAngle = require('./ScanAngle.js');
let ExternalPower = require('./ExternalPower.js');
let KeyboardInput = require('./KeyboardInput.js');
let DigitalInputEvent = require('./DigitalInputEvent.js');
let CliffEvent = require('./CliffEvent.js');
let VersionInfo = require('./VersionInfo.js');
let AutoDockingAction = require('./AutoDockingAction.js');
let AutoDockingResult = require('./AutoDockingResult.js');
let AutoDockingActionResult = require('./AutoDockingActionResult.js');
let AutoDockingActionFeedback = require('./AutoDockingActionFeedback.js');
let AutoDockingGoal = require('./AutoDockingGoal.js');
let AutoDockingFeedback = require('./AutoDockingFeedback.js');
let AutoDockingActionGoal = require('./AutoDockingActionGoal.js');

module.exports = {
  RobotStateEvent: RobotStateEvent,
  SensorState: SensorState,
  Led: Led,
  DigitalOutput: DigitalOutput,
  MotorPower: MotorPower,
  PowerSystemEvent: PowerSystemEvent,
  WheelDropEvent: WheelDropEvent,
  BumperEvent: BumperEvent,
  ControllerInfo: ControllerInfo,
  Sound: Sound,
  DockInfraRed: DockInfraRed,
  ButtonEvent: ButtonEvent,
  ScanAngle: ScanAngle,
  ExternalPower: ExternalPower,
  KeyboardInput: KeyboardInput,
  DigitalInputEvent: DigitalInputEvent,
  CliffEvent: CliffEvent,
  VersionInfo: VersionInfo,
  AutoDockingAction: AutoDockingAction,
  AutoDockingResult: AutoDockingResult,
  AutoDockingActionResult: AutoDockingActionResult,
  AutoDockingActionFeedback: AutoDockingActionFeedback,
  AutoDockingGoal: AutoDockingGoal,
  AutoDockingFeedback: AutoDockingFeedback,
  AutoDockingActionGoal: AutoDockingActionGoal,
};
