import { Senator } from "./Senator";
import { Contributor} from "./Contributor";
import {Sector} from './Sector';
import {Preferences} from './Preferences';

export interface SenatorDetails {
  senator: Senator;
  contributors: Contributor[];
  sectors: Sector[];
  preferences: Preferences;
}
