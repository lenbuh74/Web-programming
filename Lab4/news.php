<h1 align="center">News</h1>

<?php
mysql_connect('localhost', 'root', 'rootroot');
mysql_select_db('db');

$table = '';
$sql = 'SELECT * FROM db.mynews';
$qur = mysql_query($sql);
if ($qur) {
	$kol = mysql_num_rows($qur);
	if ($kol) {

		$table .=  '<table cellpadding="10" border="0" width=98%" align="center">';
		while($rez = mysql_fetch_assoc($qur)) {
			$table .= '<tr>';
			$table .= '<td style="font-size:22px;font-weight:bold;">'.stripcslashes($rez['headline']).'</td>';
			$table .= '<tr>';
			$table .= '<td>'.stripcslashes($rez['story']).'</td>';
		}
		$table .= '</table>';
	} else $table = '<font color="red">No news</font>';
} else $table = '<font color="red">Query error</font>';
echo $table;
?>



<form align="center">
<br>
<input style="width: 200px; box-shadow: 6px 6px 5px; #999; background: #000; color: #FFFFFF; border-radius: 10px; border: 1px solid #999; font-size: 20;" type="button" value="Go to CRM" onclick="window.location.href='http://localhost/lab4/admin.php'" />
</form>