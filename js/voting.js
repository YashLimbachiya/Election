$(function() {
	var $next_dept = $(".next_dept");
	var $oyster = $("#oyster");
	var $cat = $("#cat");
	var $whale = $("#whale");
	var $elephant = $("#elephant");
	var $fish = $("#fish");
	var $goose = $("#goose");
	var $info = $(".info");
	var $rating = $("input");
	var $r_comment = $("#r_comment");
	var $rat_value;
	var $mascot = $("#mascot");

	$($oyster).click(function() {
		$($rating).val(0);
		alert($rat_value);
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" World is my Oyster");
		$($oyster).css("opacity", 1);
		$($cat).css("opacity", 0.2);
		$($whale).css("opacity", 0.2);
		$($elephant).css("opacity", 0.2);
		$($fish).css("opacity", 0.2);
		$($goose).css("opacity", 0.2);
	});

	$($cat).click(function() {
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" Cat’s Meow");
		$($cat).css("opacity", 1);
		$($oyster).css("opacity", 0.2);
		$($whale).css("opacity", 0.2);
		$($elephant).css("opacity", 0.2);
		$($fish).css("opacity", 0.2);
		$($goose).css("opacity", 0.2);
	});

	$($whale).click(function() {
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" Whale of a time");
		$($whale).css("opacity", 1);
		$($cat).css("opacity", 0.2);
		$($oyster).css("opacity", 0.2);
		$($elephant).css("opacity", 0.2);
		$($fish).css("opacity", 0.2);
		$($goose).css("opacity", 0.2);
	});

	$($elephant).click(function() {
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" Elephant in the room");
		$($elephant).css("opacity", 1);
		$($cat).css("opacity", 0.2);
		$($whale).css("opacity", 0.2);
		$($oyster).css("opacity", 0.2);
		$($fish).css("opacity", 0.2);
		$($goose).css("opacity", 0.2);
	});

	$($fish).click(function() {
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" Dead Fish");
		$($fish).css("opacity", 1);
		$($cat).css("opacity", 0.2);
		$($whale).css("opacity", 0.2);
		$($elephant).css("opacity", 0.2);
		$($oyster).css("opacity", 0.2);
		$($goose).css("opacity", 0.2);
	});

	$($goose).click(function() {
		$($info).css("visibility", "visible");
		$($next_dept).css("visibility", "visible");
		$($mascot).text(" Wild Goose Chase");
		$($goose).css("opacity", 1);
		$($cat).css("opacity", 0.2);
		$($whale).css("opacity", 0.2);
		$($elephant).css("opacity", 0.2);
		$($fish).css("opacity", 0.2);
		$($oyster).css("opacity", 0.2);
	});

	$($rating).change(function() {
		$rat_value = $(this).val();
		alert($rat_value);
		switch($rat_value) {
			case '0.5':
				$($r_comment).text(" HORRIBLE");
				break;
			case '1':
				$($r_comment).text(" EXTREMELY BAD");
				break;
			case '1.5':
				$($r_comment).text(" VERY BAD");
				break;
			case '2':
				$($r_comment).text(" BAD");
				break;
			case '2.5':
				$($r_comment).text(" KINDA BAD");
				break;
			case '3':
				$($r_comment).text(" COULD BE BETTER");
				break;
			case '3.5':
				$($r_comment).text(" GOOD");
				break;
			case '4':
				$($r_comment).text(" VERY GOOD");
				break;
			case '4.5':
				$($r_comment).text(" AWESOME");
				break;
			case '5':
				$($r_comment).text(" OUTSTANDING");
				break;
		}
	})
});