import {calcAccurateHours} from '../utils/timeHelper';

export default class Service {
  constructor(id, startTime, endTime, whitness, assistant) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.whitness = whitness;
    this.assistant = assistant;

    this.duration = calcAccurateHours(endTime) - calcAccurateHours(startTime);
  }
}
