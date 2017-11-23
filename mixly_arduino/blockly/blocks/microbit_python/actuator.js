'use strict';

goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');

Blockly.Blocks.actuator.HUE = 100;

Blockly.Blocks['microbit_music_play_built_in'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies",
      "tooltip" : "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.",
      "message0" : Blockly.MIXLY_MICROBIT_Play_built_in_melody,
      "args0" : [{
          "name" : "melody",
          "options" : [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]],
          "type" : "field_dropdown"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }
      ]
    });
  }
};

Blockly.Blocks['microbit_music_pitch'] = {
  init : function () {
    this.jsonInit({
      "inputsInline" : true,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch",
      "colour" : Blockly.Blocks.actuator.HUE,
      "tooltip" : "Play a pitch at a certain number of cycles per second for a specified number of milliseconds.",
      "message0" : Blockly.MIXLY_MICROBIT_Play_pitch,
      "args0" : [{
          "min" : 0,
          "value" : 440,
          "type" : "field_number",
          "name" : "pitch"
        }, {
          "type" : "input_dummy"
        }, {
          "min" : 0,
          "value" : 1000,
          "type" : "field_number",
          "name" : "duration"
        }
      ]
    });
  }
};

Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation",
      "tooltip" : "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.",
      "message0" : Blockly.MIXLY_MICROBIT_Play_notes,
      "args0" : [{
          "check" : "Array",
          "type" : "input_value",
          "name" : "notes"
        }, {
          "checked" : true,
          "type" : "field_checkbox",
          "name" : "wait"
        }, {
          "type" : "input_dummy"
        }, {
          "checked" : false,
          "type" : "field_checkbox",
          "name" : "loop"
        }
      ]
    });
  }
};

Blockly.Blocks['microbit_music_reset'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset",
      "tooltip" : "Reset all music related settings (current tempo, octave and duration) to default values.",
      "message0" : Blockly.MIXLY_MICROBIT_Reset_music
    });
  }
};

Blockly.Blocks['microbit_music_stop'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "nextStatement" : null,
      "previousStatement" : null,
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop",
      "tooltip" : "Stop all music playback.",
      "message0" : Blockly.MIXLY_MICROBIT_Stop_music
    });
  }
};

Blockly.Blocks['microbit_music_get_tempo'] = {
  init : function () {
    this.jsonInit({
      "colour" : Blockly.Blocks.actuator.HUE,
      "output" : "Array",
      "helpUrl" : "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo",
      "tooltip" : "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).",
      "message0" : Blockly.MIXLY_MICROBIT_Get_current_tempo
    });
  }
};

Blockly.Blocks.tone_set_tempo = {
    init: function () {
        this.setColour(Blockly.Blocks.actuator.HUE);
        this.appendValueInput('DEGREE')
            .setCheck(Number)
            .appendField(Blockly.MIXLY_MICROBIT_JS_SET_TEMPO);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
}