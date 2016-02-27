/* load psiturk */
var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);

/* text blocks */

var welcome_block = {
		type: "text",
		text: "Welcome to the experiment. Press any key to begin."
};

var instructions_block = {
		type: "text",
		text: "<p>In this experiment, a circle will appear in the center " +
				"of the screen.</p><p>If the circle is <strong>blue</strong>, " +
				"press the letter F on the keyboard as fast as you can.</p>" +
				"<p>If the circle is <strong>orange</strong>, do not press " +
				"any key.</p>" +
				"<div class='left center-content'><img src='/static/images/blue.png'></img>" +
				"<p class='small'><strong>Press the F key</strong></p></div>" +
				"<div class='right center-content'><img src='/static/images/orange.png'></img>" +
				"<p class='small'><strong>Do not press a key</strong></p></div>" +
				"<p>Press any key to begin.</p>",
		timing_post_trial: 2000
};

/* stimulus block */

var test_stimuli = [{
		image: "/static/images/blue.png",
		data: {
				response: 'go'
		}
}, {
		image: "/static/images/orange.png",
		data: {
				response: 'no-go'
		}
}];

var all_trials = jsPsych.randomization.repeat(test_stimuli, 10, true);

var post_trial_gap = function() {
		return Math.floor(Math.random() * 1500) + 750;
};

var test_block = {
		type: "single-stim",
		stimuli: all_trials.image,
		choices: ['F'],
		timing_stim: 1500,
		timing_response: 1500,
		timing_post_trial: post_trial_gap,
		data: all_trials.data
};

/* debrief block */

var debrief_block = {
		type: "text",
		text: function() {
				return "<p>Your average response time was <strong>" +
				getAverageResponseTime() + "ms</strong>. Press " +
				"any key to complete the experiment. Thank you!</p>";
		}
};

function getAverageResponseTime() {

		var trials = jsPsych.dataAPI.getTrialsOfType('single-stim');

		var sum_rt = 0;
		var valid_trial_count = 0;
		for (var i = 0; i < trials.length; i++) {
				if (trials[i].response == 'go' && trials[i].rt > -1) {
						sum_rt += trials[i].rt;
						valid_trial_count++;
				}
		}
		return Math.floor(sum_rt / valid_trial_count);
}


/* define experiment structure */

var experiment_blocks = [];

experiment_blocks.push(welcome_block);

experiment_blocks.push(instructions_block);

experiment_blocks.push(test_block);

experiment_blocks.push(debrief_block);

/* start the experiment */
jsPsych.init({
		display_element: $('#jspsych-target'),
		// experiment_structure: experiment_blocks, // this is old behavior from the template
		timeline: experiment_blocks,
		on_finish: function() {
				psiturk.saveData({
						success: function() { psiturk.completeHIT(); }
				});
		},
		on_data_update: function(data) {
				psiturk.recordTrialData(data);
		}
});
