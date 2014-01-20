<!DOCTYPE html>
<html>
<body>

<?php
$url = "http://tw.tbook.mabinogi.gamania.com/Game_House/ShopAdvertise/ShopAdvertise.aspx?Name_Server=mabitw4&CharacterId=4503599627372517&Page=1&Row=7&SearchType=&SortType=&SortOption=&SearchWord=";
echo file_get_contents($url);
include 'XmlToJson.php';
echo XmlToJson::Parse($url);
?>

<?php
class XmlToJson {
public function Parse($url) {
$fileContents=file_get_contents($url);
$fileContents=str_replace(array("\n","\r","\t"),'',$fileContents);
$fileContents=trim(str_replace('"',"'",$fileContents));
$simpleXml=simplexml_load_string($fileContents);
$json=json_encode($simpleXml);
return $json;
}
}
?>
</body>
</html>