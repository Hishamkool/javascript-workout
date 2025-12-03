 
    const data = [
      { name: "Hisham", focusHours: 5, codeTime: 3 },
      { name: "Ali", focusHours: 7, codeTime: 4 },
      { name: "Rahul", focusHours: 6, codeTime: 5 }
    ];

    document.getElementById("download").addEventListener("click", () => {
      const headers = Object.keys(data[0]).join(","); 
      const rows = data.map(obj => Object.values(obj).join(",")).join("\n");
      const csvContent = headers + "\n" + rows;

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "data.csv";
      link.click();
    });
 
