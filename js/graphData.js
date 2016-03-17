				var countries = document.getElementById('countries').getContext('2d');
				var countrieData = {
					labels : ["Киев - 2919","Харьков - 628","Львов - 467","Днепропетровск - 357","Одесса - 358","Запорожье - 130","Донецк - 39"],
					datasets : [
						{
							fillColor : "rgba(118, 35, 207, 0.3)",
							strokeColor : "#9900CC",
							pointColor : "#fff",
							pointStrokeColor : "#990066",
							data : [2919,628,467,357,358,130,39]
						}
					]
				}
				new Chart(countries).Line(countrieData);new Chart(countries).Line(countrieData);
				
				var countriescircle= document.getElementById("countriescircle").getContext("2d");
				var pieData = [
						{
							value : 65,
							color : "#878BB6"
						},
						{
							value : 32,
							color : "#4ACAB4"
						},
						{
							value : 8,
							color : "#FF8153"
						},
						{
							value : 9,
							color : "#FF0033"
						},
						{
							value : 2,
							color : "#660033"
						},
						{
							value : 9,
							color : "#99FF99"
						},
						{
							value : 8,
							color : "#003399"
						}
						];
				var pieOptions = {
						segmentShowStroke : true,
						animateScale : true
				};
				new Chart(countriescircle).Pie(pieData, pieOptions);
				
				var frontend = document.getElementById("frontend").getContext("2d");
				var barData = {
					labels : ["Киев - 266","Харьков - 86","Львов - 82","Днепропетровск - 31","Одесса - 43","Запорожье - 27","Донецк - 4"],
					datasets : [
						{
							fillColor : "#9999FF",
							strokeColor : "#9933CC",
							data : [266,86,82,31,43,27, 4]
						}
					]
				}
				new Chart(frontend).Bar(barData);new Chart(frontend).Bar(barData);
				
				var junphp = document.getElementById('junphp').getContext('2d');
				var junphpData = {
					labels : ["Киев - 65","Харьков - 32","Львов - 9","Днепропетровск - 8","Одесса - 9","Запорожье - 8","Донецк - 2"],
					datasets : [
						{
							fillColor : "rgba(118, 35, 162, 0.3)",
							strokeColor : "#9900CC",
							pointColor : "#fff",
							pointStrokeColor : "#990066",
							data : [65,32,9,8,9,8,2]
						}
					]
				}
				new Chart(junphp).Line(junphpData);new Chart(junphp).Line(junphpData);
				
				var junphpcircle= document.getElementById("junphpcircle").getContext("2d");
				var pieData = [
					{
						value : 65,
						color : "#878BB6"
					},
					{
						value : 32,
						color : "#4ACAB4"
					},
					{
						value : 9,
						color : "#FF8153"
					},
					{
						value : 8,
						color : "#FF0033"
					},
					{
						value : 9,
						color : "#FFFF99"
					},
					{
						value : 8,
						color : "#99FF99"
					},
					{
						value : 2,
						color : "#003399"
					}
				];
				var pieOptions = {
					segmentShowStroke : true,
					animateScale : true
				};
				new Chart(junphpcircle).Pie(pieData, pieOptions);	

				var junjava = document.getElementById('junjava').getContext('2d');
				var junjavaData = {
					labels : ["Киев - 11","Харьков - 3","Львов - 10","Днепропетровск - 2","Одесса - 2","Запорожье - 3","Донецк - 0"],
					datasets : [
						{
							fillColor : "rgba(118, 35, 162, 0.2)",
							strokeColor : "#9900CC",
							pointColor : "#fff",
							pointStrokeColor : "#990066",
							data : [11,3,10,2,2,3,0]
						}
					]
				}
				new Chart(junjava).Line(junjavaData);new Chart(junjava).Line(junjavaData);

				var junjavacircle= document.getElementById("junjavacircle").getContext("2d");
				var pieData = [
					{
						value : 11,
						color : "#878BB6"
					},
					{
						value : 3,
						color : "#4ACAB4"
					},
					{
						value : 10,
						color : "#FF8153"
					},
					{
						value : 2,
						color : "#FF0033"
					},
					{
						value : 2,
						color : "#FFFF99"
					},
					{
						value : 3,
						color : "#99FF99"
					},
					{
						value : 0,
						color : "#003399"
					}
				];
				var pieOptions = {
					segmentShowStroke : true,
					animateScale : true
				};
				new Chart(junjavacircle).Pie(pieData, pieOptions);	