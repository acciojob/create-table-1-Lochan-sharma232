function insert_Row() {
    //Write your code here
  let mytable=document.getElementById("sampleTable");
	var row=mytable.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
  cell1.textContent="New Cell1";
	cell2.textContent="New Cell2";
}
