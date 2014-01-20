<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="expires" content="0">
	</head>
	<body>
		<textarea style="width:800px;height:600px">
		<?php
		$url = "http://tw.tbook.mabinogi.gamania.com/Game_House/ShopAdvertise/ShopAdvertise.aspx?Name_Server=mabitw4&CharacterId=4503599627372517&Page=1&Row=7&SearchType=&SortType=1&SortOption=1&SearchWord=十六夜";
		//$url = urlencode ($url);
		$url = mb_convert_encoding ($url, "BIG-5", "UTF-8");
		$content = file_get_contents($url);
		$content = mb_convert_encoding($content, "UTF-8", "BIG-5");
		$xml = simplexml_load_string($content);
		$serialized_ar = json_encode($xml);
		$ar2 = json_decode($serialized_ar);
		//var_dump($ar2);
		echo $content;
		//echo mb_detect_encoding($content);
		?>
		</textarea>
	</body>
</html>