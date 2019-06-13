/*!
 * @file Constants Definitions
 * @author Sankarsan Kampa (a.k.a. k3rn31p4nic)
 * @license GPL-3.0
 * @copyright 2018 - The Bastion Bot Project
 */

import { Constants } from "discord.js";


enum LISTENER_MODE {
  ON,
  ONCE,
};


let DefaultOptions = Constants.DefaultOptions;
let ChannelTypes = Constants.ChannelTypes;
let Events = Constants.Events;
let ActivityTypes = Constants.ActivityTypes;
let MessageTypes = Constants.MessageTypes;
let DefaultAvatars = Constants.DefaultAvatars;
let Colors = Constants.Colors;
let DiscordAPIErrors = Constants.APIErrors;


export {
  LISTENER_MODE,
  DefaultOptions,
  ChannelTypes,
  Events,
  ActivityTypes,
  MessageTypes,
  DefaultAvatars,
  Colors,
  DiscordAPIErrors
};
