<?php
$url = "http://tw.tbook.mabinogi.gamania.com/Game_House/ShopAdvertise/ShopAdvertise.aspx?Name_Server=mabitw4&CharacterId=4503599627372517&Page=1&Row=7&SearchType=&SortType=1&SortOption=1&SearchWord=十六夜";
$url = mb_convert_encoding($url, "BIG-5", "UTF-8");
$content = file_get_contents($url);
$content = mb_convert_encoding($content, "UTF-8", "BIG-5");
echo $content;
?>