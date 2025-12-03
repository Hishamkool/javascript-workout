/* add this package to the html-body */
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

const data = [
  { name: "Hisham", focusHours: 5, codeTime: 3 },
  { name: "Ali", focusHours: 7, codeTime: 4 },
  { name: "Rahul", focusHours: 6, codeTime: 5 }
];

document.getElementById("downloadExcel").addEventListener("click", () => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Stats");
  XLSX.writeFile(workbook, "data.xlsx");
});

