import { Contributor} from "./Contributor";
import {Sector} from './Sector';
import {Preferences} from './Preferences';
import { Congress } from "./Congress";

export interface CongressDetails {
  congress: Congress;
  contributors: Contributor[];
  sectors: Sector[];
  preferences: Preferences;
}
