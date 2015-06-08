$(document).ready(function(){
	// API authentication
	jQuery.fn.spectragram.accessData = {
		accessToken: '', // This is blank, the parts of the API we are using do not require it.
		clientID: 'ccdd7323d5c246a0948a5dc3a376ca55'
	};
	
	// Form submission hook
	$('#image-search-form').submit(function(event){
		var tag         = $('#image-search-form-tag')
			.val()
			.replace(/[\s-#!\$%\^&\*\+\.\'\"]+/g, ''); // Remove invalid characters
		var $results    = $('#results');
		var $searching  = $('#searching');
		var $no_results = $('#no-results');
		
		var afterSpectragram = function()
		{
			// Remove "Searching..." message
			$searching.fadeOut();

		}
		
		var	timeOut = function()
		{
			if(0 == $results.children().length)
			{
				// Remove "Searching..." message
				afterSpectragram();
				
				// Let the user know there are no results
				$no_results
					.text('Sorry, no results found for #' + tag)
					.fadeIn();
			}
		}
		
		// Callback for catching errors thrown by spectragram
		// (it seems these cannot by caught in a try block)
		window.onerror = function (message, filename, linenumber)
		{
			var r = false;
			
			if(0 <= message.search('does not have results'))
			{
				// Remove "Searching..." message
				afterSpectragram();
				
				// Let the user know there are no results
				$no_results
					.text('Sorry, no results found for #' + tag)
					.fadeIn();
				
				r = true; // We have handled the exception
			}
			
		    return r;
		}
		
		// Clear any previous results
		$results.empty();
		$no_results.fadeOut();
	
		// Let the user know we are searching for results
		$searching
			.text('Searching for #' + tag + '...')
			.fadeIn();
		
		// Make AJAX call to instagram API (through spectragram)
		$results.spectragram('getRecentTagged',{
			query: tag,
			max: $('#image-search-form-limit').val(),
			wrapEachWith: '<li class="col-lg-2 col-md-3 col-sm-4 col-xs-6"></li>',
			size: 'medium',
			complete: afterSpectragram
		});
		
		// Give up after 5 seconds
		// (only required by browsers that don't honour window.onerror)
		setTimeout(timeOut, 5000);
		
		// Done
		event.preventDefault();
	});
});
