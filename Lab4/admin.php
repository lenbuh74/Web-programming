<h1 align="center">Admin page</h1>

<?php

//Соединение с базой

mysql_connect('localhost', 'root', 'rootroot');
mysql_select_db('db');

$out = '';
$out .= '<form method="POST">';
$out .=  '<table cellpadding="5" border="0" width="80%" align="center">';
$out .= '<tr>';
$out .= '<tr><td><b>Headline:</b></td></tr>';
$out .= '<br></br>';
$out .= '<td><input type="text" name="headline" style="width:98%" value="" /></td>';
$out .= '</tr>';
$out .= '<tr><td><b>Story:</b></td></tr>';
$out .= '<tr><td><textarea name="story" style="width:98%;height:200px;"></textarea></td></tr>';
$out .= '<tr><td align="center"><input style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #000; color: #FFFFFF; border-radius: 10px; border: 1px solid #999; font-size: 16;" type="submit" name="add" value="Add news"></td></tr>';
$out .= '</table>';
$out .= '</form>';

if(isset($_POST['add'])){
	//echo '<pre>';
	//print_r($_POST);
	//echo '</pre>';


$headline = addslashes(htmlspecialchars($_POST['headline']));
$story = addslashes(htmlspecialchars($_POST['story']));

$sql = 'INSERT INTO db.mynews(headline, story) VALUES("'.$headline.'","'.$story.'")';
$qur = mysql_query($sql);
if ($qur) echo '<font color="green">Added!</font>';
else echo '<font color="red">Did not add</font>';

}

echo $out;

if (isset($_GET['des'])){
	if ($_GET['des'] == 'delete') {
		$sql = 'DELETE FROM db.mynews WHERE id = '.$_GET['id'].' LIMIT 1';
		$qur = mysql_query($sql);
		if ($qur) echo '<font color="green">Deleted!</font>';

		else {
			echo '<font color="red">Did not delete!</font>';
		}
		//http://localhost/test.php?des=delete&id=1
	}
}

$table = '';
$sql = 'SELECT * FROM db.mynews';
$qur = mysql_query($sql);
if ($qur) {
	$kol = mysql_num_rows($qur);
	if ($kol) {

		$table .=  '<table cellpadding="10" cellspacing="0" border="0" width="80%" align="center">';
		$table .= '<tr><td width="60%" align="center"><b>Headline</b></td><td width="40%" align="center"><b>Actions</b></td></tr>';
		while($rez = mysql_fetch_assoc($qur)) {
			$table .= '<tr>';
			$table .= '<td>'.stripcslashes($rez['headline']).'</td>';
			$table .= '<td width="60%" align="center"><a href="?des=delete&id='.$rez['id'].'">Delete</a></td></tr>';
		}
		$table .= '</table>';
	} else $table = '<font color="red">No news</font>';
} else $table = '<font color="red">Query error</font>';
echo $table;
?>

<form align="center">
<br>
<input style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #000; color: #FFFFFF; border-radius: 10px; border: 1px solid #999; font-size: 20;" type="button" value="Go to news page" onclick="window.location.href='http://localhost/lab4/news.php'" />
</form>