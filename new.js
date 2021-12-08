function deleteRow(tableID)  {
    var table = document.getElementById(tableID).tBodies[0];
    var rowCount = table.rows.length;

    for(var i=1; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[8].getElementsByTagName('input')[0];
        if(null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
         }
    }
}