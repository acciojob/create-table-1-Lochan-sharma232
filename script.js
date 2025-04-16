function insert_Row() {
    //Write your code here
  let mytable=document.getElementById("sampleTable");
	var row=mytable.insertRow(0);
	var cell1=mytable.insertCell(0);
	var cell2=mytable.insertCell(1);
  cell1.innerHTML="New Cell1";
	cell2.innerHTML="New Cell2";
}
