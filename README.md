# jspsi-go-example

This is an updated example of the integration between [PsiTurk](http://www.psiturk.org/) and [jsPsych](http://www.jspsych.org/). It is a rewrite of the example code given in the [jsPsych tutorial](http://docs.jspsych.org/tutorials/rt-task/) using Literate [CoffeeScript](http://coffeescript.org/). It uses some code used in [jodeleeuw](https://github.com/jodeleeuw)'s [experiment example](http://www.psiturk.org/ee/W4v3TPAsiD6FUVY8PDyajH) (also available [on GitHub](https://github.com/jodeleeuw/sample-jspsych-psiturk-experiment)).

For a breakdown of how the experiment works, see [the Literate CoffeeScript file](https://github.com/jtth/jspsi-go-example/blob/master/static/js/experiment.litcoffee), or, if you prefer, see [the compiled javascript](https://github.com/jtth/jspsi-go-example/blob/master/static/js/experiment.js).

The experiment file `templates/exp.html` calls the `static/js/experiment.js` experiment.

See the [PsiTurk Quick Start Guide](http://www.psiturk.org/quick_start/) for info on how to get up and running quickly. Instead of using `psiturk-setup-example` to create example code, you can check out this repository. (This section will be replaced once this experiment example goes live on the [PsiTurk Experiment Exchange](http://www.psiturk.org/ee/).)

	git clone https://github.com/jtth/jspsi-go-example.git

Once you have the directory on your computer, go into it and start PsiTurk.

	cd jspsi-go-example
	psiturk

All of this is available under an MIT license. If you like this and want more examples, consider [leaving a tip through PayPal](https://www.paypal.me/jtth) or [through Cash](https://cash.me/$jtth).
