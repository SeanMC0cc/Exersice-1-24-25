
		// ROUND OFF
		function round() {
			var a = document.getElementById('a').value;
			var b = document.getElementById('b').value;

			window.alert(Math.round(a));
			document.getElementById("demo").innerHTML = Math.round(a);
			// make sure you have a paragraph with the id demo
		}

		// POWER
		function power() {
			var a = document.getElementById('a').value;
			var b = document.getElementById('b').value;
			
			window.alert(Math.pow(a,b));
			document.getElementById("demo").innerHTML = Math.pow(a,b);
			// make sure you have a paragraph with the id demo
		}

		// SQUARE ROOT
		function sqrt() {
			var a = document.getElementById('a').value;
			var b = document.getElementById('b').value;

			window.alert(Math.sqrt(a));
			document.getElementById("demo").innerHTML = Math.sqrt(a);
			// make sure you have a paragraph with the id demo
		}

		// RANDOM
		function random() {
			var a = document.getElementById('a').value;
			var b = document.getElementById('b').value;

			window.alert(Math.random());
			document.getElementById("demo").innerHTML = Math.random();
			// make sure you have a paragraph with the id demo
		}
