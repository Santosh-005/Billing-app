// let total = 0;
// let items = [];

// function addItem() {
//   const name = document.getElementById("itemName").value.trim();
//   const size = document.getElementById("posterSize").value;
//   const qty = parseInt(document.getElementById("itemQty").value);
//   const price = parseFloat(document.getElementById("itemPrice").value);

//   if (!name || !qty || !price) {
//     alert("Please fill all item fields.");
//     return;
//   }

//   const itemTotal = qty * price;

//   items.push({
//     name,
//     size,
//     qty,
//     price,
//     total: itemTotal
//   });

//   const table = document.getElementById("itemTable");
//   const row = table.insertRow();
//   row.innerHTML = `
//     <td>${name}</td>
//     <td>${size}</td>
//     <td>${qty}</td>
//     <td>${price}</td>
//     <td>${itemTotal}</td>
//     <td class="print-hide">
//       <button class="remove-btn" onclick="removeItem(this, ${itemTotal}, ${items.length - 1})">Remove</button>
//     </td>
//   `;

//   total += itemTotal;
//   document.getElementById("grandTotal").innerText = total;

//   const cust = document.getElementById("customerName").value || "-";
//   const date = document.getElementById("billDate").value || "-";
//   document.getElementById("custDetails").innerText = `Customer: ${cust} | Date: ${date}`;

//   // Clear input
//   document.getElementById("itemName").value = "";
//   document.getElementById("itemQty").value = "";
//   document.getElementById("itemPrice").value = "";
// }

// function removeItem(button, itemTotal, index) {
//   const row = button.parentElement.parentElement;
//   row.remove();
//   total -= itemTotal;
//   items.splice(index, 1);
//   document.getElementById("grandTotal").innerText = total;
// }

// function printBill() {
//   if (total === 0) {
//     alert("Please add at least one item before printing!");
//     return;
//   }
//   window.print();
// }

// function sendData() {
//   const customerName = document.getElementById("customerName").value;
//   const date = document.getElementById("billDate").value;

//   if (!customerName || items.length === 0) {
//     alert("Please enter customer name and at least one item.");
//     return;
//   }

//   // Form input fields ko set karo
//   document.getElementById("formCustomerName").value = customerName;
//   document.getElementById("formDate").value = date;
//   document.getElementById("formItems").value = JSON.stringify(items);

//   // Form submit karo
//   document.getElementById("saveForm").submit();

//   alert("✅ Data saved to Google Sheet");
// }
//   // // Clear everything
//   // document.getElementById("customerName").value = "";
//   // document.getElementById("itemTable").innerHTML = `
//   //   <tr>
//   //     <th>Item</th>
//   //     <th>Size</th>
//   //     <th>Qty</th>
//   //     <th>Price</th>
//   //     <th>Total</th>
//   //     <th class="print-hide">Action</th>
//   //   </tr>
//   // `;
//   // document.getElementById("grandTotal").innerText = 0;
//   // document.getElementById("custDetails").innerText = "";
//   // items = [];
//   // total = 0;

//   function clearForm() {
//   document.getElementById("customerName").value = "";
//   document.getElementById("billDate").value = "";
//   document.getElementById("itemTable").innerHTML = `
//     <tr>
//       <th>Item</th>
//       <th>Size</th>
//       <th>Qty</th>
//       <th>Price</th>
//       <th>Total</th>
//       <th class="print-hide">Action</th>
//     </tr>
//   `;
//   document.getElementById("grandTotal").innerText = 0;
//   document.getElementById("custDetails").innerText = "";
//   items = [];
//   total = 0;
// }

// let total = 0;
// let items = [];

// function addItem() {
//   const name = document.getElementById("itemName").value.trim();
//   const size = document.getElementById("posterSize").value;
//   const qty = parseInt(document.getElementById("itemQty").value);
//   const price = parseFloat(document.getElementById("itemPrice").value);

//   if (!name || !size || !qty || !price) {
//     // alert("Please fill all item fields.");
//     showAlert("Please fill all item fields.");
//     return;
//   }

//   const itemTotal = qty * price;

//   items.push({
//     name,
//     size,
//     qty,
//     price,
//     total: itemTotal
//   });

//   const table = document.getElementById("itemTable");
//   const row = table.insertRow();
//   row.innerHTML = `
//     <td>${name}</td>
//     <td>${size}</td>
//     <td>${qty}</td>
//     <td>${price}</td>
//     <td>${itemTotal}</td>
//     <td class="print-hide">
//       <button class="remove-btn" onclick="removeItem(this, ${itemTotal}, ${items.length - 1})">Remove</button>
//     </td>
//   `;

//   total += itemTotal;
//   document.getElementById("grandTotal").innerText = total;

//   const cust = document.getElementById("customerName").value || "-";
//   const date = document.getElementById("billDate").value || "-";
//   document.getElementById("custDetails").innerText = `Customer: ${cust} | Date: ${date}`;

//   // Clear input fields (but not customer or table)
//   document.getElementById("itemName").value = "";
//   document.getElementById("posterSize").value = "";
//   document.getElementById("itemQty").value = "";
//   document.getElementById("itemPrice").value = "";
// }

// function removeItem(button, itemTotal, index) {
//   const row = button.parentElement.parentElement;
//   row.remove();
//   total -= itemTotal;
//   items.splice(index, 1);
//   document.getElementById("grandTotal").innerText = total;
// }

// function printBill() {
//   if (total === 0) {
//    showAlert("Please add at least one item before printing!");
//     return;
//   }
//   window.print();
// }

// function sendData(event) {
//   event.preventDefault(); // ← Prevents form reload

//   const customerName = document.getElementById("customerName").value;
//   const date = document.getElementById("billDate").value;

//   if (!customerName || items.length === 0) {
//     // alert("Please enter customer name and at least one item.");
//     showAlert("Please enter customer name and at least one item.");

//     return;
//   }

//   // Set form fields
//   document.getElementById("formCustomerName").value = customerName;
//   document.getElementById("formDate").value = date;
//   document.getElementById("formItems").value = JSON.stringify(items);

//   // Submit using fetch instead of form.submit() to avoid page reload
//   fetch(document.getElementById("saveForm").action, {
//     method: "POST",
//     body: new FormData(document.getElementById("saveForm")),
//   })
//     .then((res) => res.text())
//     .then((data) => {
//       showAlert("✅ Data saved to Google Sheet");
      
//     })
//     .catch((err) => showAlert("❌ Error: " + err));
// }

// //from clear karse
// function clearForm() {
//   document.getElementById("customerName").value = "";
//   document.getElementById("billDate").value = "";
//   document.getElementById("itemTable").innerHTML = `
//     <tr>
//       <th>Item</th>
//       <th>Size</th>
//       <th>Qty</th>
//       <th>Price</th>
//       <th>Total</th>
//       <th class="print-hide">Action</th>
//     </tr>
//   `;
//   document.getElementById("grandTotal").innerText = 0;
//   document.getElementById("custDetails").innerText = "";
//   items = [];
//   total = 0;
// }

// //---

// function showAlert(message) {
//   document.getElementById("alertMessage").innerText = message;
//   document.getElementById("customAlert").style.display = "block";
// }

// function closeAlert() {
//   document.getElementById("customAlert").style.display = "none";
// }

// document.addEventListener("keydown", function(e) {
//   if (e.ctrlKey && e.key === "p") {
//     e.preventDefault();
//     printBill();
//   }
// });

// document.querySelectorAll('.input-field').forEach((input, index, inputs) => {
//     input.addEventListener('keydown', function (e) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             const nextInput = inputs[index + 1];
//             if (nextInput) {
//                 nextInput.focus();
//             } else {
//                 document.querySelector('.add-item-btn')?.focus(); // Last field ke baad button pe le jao
//             }
//         }
//     });
// });

// 
// let total = 0;
// let items = [];

// function addItem() {
//   const name = document.getElementById("itemName").value.trim();
//   const size = document.getElementById("posterSize").value;
//   const qty = parseInt(document.getElementById("itemQty").value);
//   const price = parseFloat(document.getElementById("itemPrice").value);

//   if (!name || !size || !qty || !price) {
//     showAlert("Please fill all item fields.");
//     return;
//   }

//   const itemTotal = qty * price;
//   items.push({ name, size, qty, price, total: itemTotal });

//   const table = document.getElementById("itemTable");
//   const row = table.insertRow();
//   row.innerHTML = `
//     <td>${date}</td>
//     <td>${name}</td>
//     <td>${size}</td>
//     <td>${qty}</td>
//     <td>${price}</td>
//     <td>${itemTotal}</td>
//     <td class="print-hide">
//       <button class="remove-btn" onclick="removeItem(this, ${itemTotal}, ${items.length - 1})">Remove</button>
//     </td>
//   `;

//   total += itemTotal;
//   document.getElementById("grandTotal").innerText = total;

//   const cust = document.getElementById("customerName").value || "-";
//   const date = document.getElementById("billDate").value || "-";
//   document.getElementById("custDetails").innerText = `Customer: ${cust} | Date: ${date}`;

//   document.getElementById("itemName").value = "";
//   document.getElementById("posterSize").value = "";
//   document.getElementById("itemQty").value = "";
//   document.getElementById("itemPrice").value = "";
// }

// function removeItem(button, itemTotal, index) {
//   const row = button.parentElement.parentElement;
//   row.remove();
//   total -= itemTotal;
//   items.splice(index, 1);
//   document.getElementById("grandTotal").innerText = total;
// }

// function printBill() {
//   if (total === 0) {
//     showAlert("Please add at least one item before printing!");
//     return;
//   }
//   window.print();
// }

// function sendData(event) {
//   event.preventDefault();

//   const customerName = document.getElementById("customerName").value;
//   const date = document.getElementById("billDate").value;

//   if (!customerName || items.length === 0) {
//     showAlert("Please enter customer name and at least one item.");
//     return;
//   }

//   document.getElementById("formCustomerName").value = customerName;
//   document.getElementById("formDate").value = date;
//   document.getElementById("formItems").value = JSON.stringify(items);

//   fetch(document.getElementById("saveForm").action, {
//     method: "POST",
//     body: new FormData(document.getElementById("saveForm")),
//   })
//     .then((res) => res.text())
//     .then((data) => {
//       showAlert("✅ Data saved to Google Sheet");
//     })
//     .catch((err) => showAlert("❌ Error: " + err));
// }

// function clearForm() {
//   document.getElementById("customerName").value = "";
//   document.getElementById("billDate").value = "";
//   document.getElementById("itemTable").innerHTML = `
//     <tr>
//       <th>Date</th>
//       <th>Item</th>
//       <th>Size</th>
//       <th>Qty</th>
//       <th>Price</th>
//       <th>Total</th>
//       <th class="print-hide">Action</th>
//     </tr>
//   `;
//   document.getElementById("grandTotal").innerText = 0;
//   document.getElementById("custDetails").innerText = "";
//   items = [];
//   total = 0;
// }

// function showAlert(message) {
//   document.getElementById("alertMessage").innerText = message;
//   document.getElementById("customAlert").style.display = "block";
// }

// function closeAlert() {
//   document.getElementById("customAlert").style.display = "none";
// }

// document.addEventListener("keydown", function(e) {
//   if (e.ctrlKey && e.key === "p") {
//     e.preventDefault();
//     printBill();
//   }
// });

// document.querySelectorAll('.input-field').forEach((input, index, inputs) => {
//   input.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const nextInput = inputs[index + 1];
//       if (nextInput) {
//         nextInput.focus();
//       } else {
//         document.querySelector('.add-item-btn')?.focus();
//       }
//     }
//   });
// });

// function searchCustomer() {
//   const searchName = document.getElementById("searchCustomer").value.trim();
//   if (!searchName) {
//     showAlert("Please enter a customer name to search.");
//     return;
//   }

//   fetch(`https://script.google.com/macros/s/AKfycbwe14Kt1eojTHx5gxJQ2FwFyyszv2-AJXuNlVdDXjapLM2Dm68C68wH_mYwTw12SX1V/exec?customer=${encodeURIComponent(searchName)}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.length === 0) {
//         showAlert("No records found for this customer.");
//         return;
//       }

//       const table = document.getElementById("itemTable");
//       table.innerHTML = `
//         <tr>
        
//           <th>Item</th>
//           <th>Size</th>
//           <th>Qty</th>
//           <th>Price</th>
//           <th>Total</th>
//           <th class="print-hide">Action</th>
//         </tr>
//       `;

//       items = [];
//       total = 0;

//       data.forEach((record, index) => {
//         const row = table.insertRow();
//         row.innerHTML = `
//          <td>${record.date}</td>
//           <td>${record.item}</td>
//           <td>${record.size}</td>
//           <td>${record.qty}</td>
//           <td>${record.price}</td>
//           <td>${record.total}</td>
//           <td class="print-hide">
//             <button class="remove-btn" onclick="removeItem(this, ${record.total}, ${index})">Remove</button>
//           </td>
//         `;

//         total += Number(record.total);
//         items.push({
//           name: record.item,
//           size: record.size,
//           qty: Number(record.qty),
//           price: Number(record.price),
//           total: Number(record.total)
//         });
//       });

//       document.getElementById("grandTotal").innerText = total;

//       const customerName = data[0].customerName || "-";
//       const date = data[0].date || "-";
//       document.getElementById("custDetails").innerText = `Customer: ${customerName} | Date: ${date}`;
//       document.getElementById("customerName").value = customerName;
//       document.getElementById("billDate").value = date;

//       showAlert("✅ Records loaded! You can print now.");
//     })
//     .catch(err => showAlert("❌ Error fetching data: " + err));
// }


// let total = 0;
// let items = [];

// function addItem() {
//   const date = document.getElementById("billDate").value || "-";
//   const name = document.getElementById("itemName").value.trim();
//   const size = document.getElementById("posterSize").value;
//   const qty = parseInt(document.getElementById("itemQty").value);
//   const price = parseFloat(document.getElementById("itemPrice").value);

//   if (!name || !size || !qty || !price) {
//     showAlert("Please fill all item fields.");
//     return;
//   }

//   const itemTotal = qty * price;
//   items.push({ date, name, size, qty, price, total: itemTotal });

//   const table = document.getElementById("itemTable");
//   const row = table.insertRow();
//   row.innerHTML = `
//     <td>${date}</td>
//     <td>${name}</td>
//     <td>${size}</td>
//     <td>${qty}</td>
//     <td>${price}</td>
//     <td>${itemTotal}</td>
//     <td class="print-hide">
//       <button class="remove-btn" onclick="removeItem(this, ${itemTotal}, ${items.length - 1})">Remove</button>
//     </td>
//   `;

//   total += itemTotal;
//   document.getElementById("grandTotal").innerText = total;

//   const cust = document.getElementById("customerName").value || "-";
//   document.getElementById("custDetails").innerText = `Customer: ${cust} | Date: ${date}`;

//   document.getElementById("itemName").value = "";
//   document.getElementById("posterSize").value = "";
//   document.getElementById("itemQty").value = "";
//   document.getElementById("itemPrice").value = "";
// }

// function removeItem(button, itemTotal, index) {
//   const row = button.parentElement.parentElement;
//   row.remove();
//   total -= itemTotal;
//   items.splice(index, 1);
//   document.getElementById("grandTotal").innerText = total;
// }

// function printBill() {
//   if (total === 0) {
//     showAlert("Please add at least one item before printing!");
//     return;
//   }
//   window.print();
// }

// function sendData(event) {
//   event.preventDefault();

//   const customerName = document.getElementById("customerName").value;
//   const date = document.getElementById("billDate").value;

//   if (!customerName || items.length === 0) {
//     showAlert("Please enter customer name and at least one item.");
//     return;
//   }

//   document.getElementById("formCustomerName").value = customerName;
//   document.getElementById("formDate").value = date;
//   document.getElementById("formItems").value = JSON.stringify(items);

//   fetch(document.getElementById("saveForm").action, {
//     method: "POST",
//     body: new FormData(document.getElementById("saveForm")),
//   })
//     .then((res) => res.text())
//     .then((data) => {
//       showAlert("✅ Data saved to Google Sheet");
//     })
//     .catch((err) => showAlert("❌ Error: " + err));
// }

// function clearForm() {
//   document.getElementById("customerName").value = "";
//   document.getElementById("billDate").value = "";
//   document.getElementById("itemTable").innerHTML = `
//     <tr>
//       <th>Date</th>
//       <th>Item</th>
//       <th>Size</th>
//       <th>Qty</th>
//       <th>Price</th>
//       <th>Total</th>
//       <th class="print-hide">Action</th>
//     </tr>
//   `;
//   document.getElementById("grandTotal").innerText = 0;
//   document.getElementById("custDetails").innerText = "";
//   items = [];
//   total = 0;
// }

// function showAlert(message) {
//   document.getElementById("alertMessage").innerText = message;
//   document.getElementById("customAlert").style.display = "block";
// }

// function closeAlert() {
//   document.getElementById("customAlert").style.display = "none";
// }

// document.addEventListener("keydown", function (e) {
//   if (e.ctrlKey && e.key === "p") {
//     e.preventDefault();
//     printBill();
//   }
// });

// document.querySelectorAll('.input-field').forEach((input, index, inputs) => {
//   input.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const nextInput = inputs[index + 1];
//       if (nextInput) {
//         nextInput.focus();
//       } else {
//         document.querySelector('.add-item-btn')?.focus();
//       }
//     }
//   });
// });

// function searchCustomer() {
//   const searchName = document.getElementById("searchCustomer").value.trim();
//   if (!searchName) {
//     showAlert("Please enter a customer name to search.");
//     return;
//   }

//   fetch(`https://script.google.com/macros/s/AKfycbwe14Kt1eojTHx5gxJQ2FwFyyszv2-AJXuNlVdDXjapLM2Dm68C68wH_mYwTw12SX1V/exec?customer=${encodeURIComponent(searchName)}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.length === 0) {
//         showAlert("No records found for this customer.");
//         return;
//       }

//       const table = document.getElementById("itemTable");
//       table.innerHTML = `
//         <tr>
//           <th>Date</th>
//           <th>Item</th>
//           <th>Size</th>
//           <th>Qty</th>
//           <th>Price</th>
//           <th>Total</th>
//           <th class="print-hide">Action</th>
//         </tr>
//       `;

//       items = [];
//       total = 0;

//       data.forEach((record, index) => {
//         const row = table.insertRow();
//         row.innerHTML = `
//           <td>${record.date}</td>
//           <td>${record.item}</td>
//           <td>${record.size}</td>
//           <td>${record.qty}</td>
//           <td>${record.price}</td>
//           <td>${record.total}</td>
//           <td class="print-hide">
//             <button class="remove-btn" onclick="removeItem(this, ${record.total}, ${index})">Remove</button>
//           </td>
//         `;

//         total += Number(record.total);
//         items.push({
//           date: record.date,
//           name: record.item,
//           size: record.size,
//           qty: Number(record.qty),
//           price: Number(record.price),
//           total: Number(record.total)
//         });
//       });

//       document.getElementById("grandTotal").innerText = total;

//       const customerName = data[0].customerName || "-";
//       const date = data[0].date || "-";
//       document.getElementById("custDetails").innerText = `Customer: ${customerName} | Date: ${date}`;
//       document.getElementById("customerName").value = customerName;
//       document.getElementById("billDate").value = date;

//       showAlert("✅ Records loaded! You can print now.");
//     })
//     .catch(err => showAlert("❌ Error fetching data: " + err));
// }
let total = 0;
let items = [];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function addItem() {
  const date = document.getElementById("billDate").value || "-";
  const name = document.getElementById("itemName").value.trim();
  const size = document.getElementById("posterSize").value;
  const qty = parseInt(document.getElementById("itemQty").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (!name || !size || !qty || !price) {
    showAlert("Please fill all item fields.");
    return;
  }

  const itemTotal = qty * price;
  items.push({ date, name, size, qty, price, total: itemTotal });

  const table = document.getElementById("itemTable");
  const row = table.insertRow();
  row.innerHTML = `
    <td>${formatDate(date)}</td>
    <td>${name}</td>
    <td>${size}</td>
    <td>${qty}</td>
    <td>${price}</td>
    <td>${itemTotal}</td>
    <td class="print-hide">
      <button class="remove-btn" onclick="removeItem(this, ${itemTotal}, ${items.length - 1})">Remove</button>
    </td>
  `;

  total += itemTotal;
  document.getElementById("grandTotal").innerText = total;

  const cust = document.getElementById("customerName").value || "-";
  document.getElementById("custDetails").innerText = `Customer: ${cust} `;

  document.getElementById("itemName").value = "";
  document.getElementById("posterSize").value = "";
  document.getElementById("itemQty").value = "";
  document.getElementById("itemPrice").value = "";
}

function removeItem(button, itemTotal, index) {
  const row = button.parentElement.parentElement;
  row.remove();
  total -= itemTotal;
  items.splice(index, 1);
  document.getElementById("grandTotal").innerText = total;
}

function printBill() {
  if (total === 0) {
    showAlert("Please add at least one item before printing!");
    return;
  }
  window.print();
}

function sendData(event) {
  event.preventDefault();

  const customerName = document.getElementById("customerName").value;
  const date = document.getElementById("billDate").value;

  if (!customerName || items.length === 0) {
    showAlert("Please enter customer name and at least one item.");
    return;
  }

  document.getElementById("formCustomerName").value = customerName;
  document.getElementById("formDate").value = date;
  document.getElementById("formItems").value = JSON.stringify(items);

  fetch(document.getElementById("saveForm").action, {
    method: "POST",
    body: new FormData(document.getElementById("saveForm")),
  })
    .then((res) => res.text())
    .then((data) => {
      showAlert("✅ Data saved to Google Sheet");
    })
    .catch((err) => showAlert("❌ Error: " + err));
}

function clearForm() {
  document.getElementById("customerName").value = "";
  document.getElementById("billDate").value = "";
  document.getElementById("itemTable").innerHTML = `
    <tr>
      <th>Date</th>
      <th>Item</th>
      <th>Size</th>
      <th>Qty</th>
      <th>Price</th>
      <th>Total</th>
      <th class="print-hide">Action</th>
    </tr>
  `;
  document.getElementById("grandTotal").innerText = 0;
  document.getElementById("custDetails").innerText = "";
  items = [];
  total = 0;
}

function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    printBill();
  }
});

document.querySelectorAll('.input-field').forEach((input, index, inputs) => {
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = inputs[index + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        document.querySelector('.add-item-btn')?.focus();
      }
    }
  });
});

function searchCustomer() {
  const searchName = document.getElementById("searchCustomer").value.trim();
  if (!searchName) {
    showAlert("Please enter a customer name to search.");
    return;
  }

  fetch(`https://script.google.com/macros/s/AKfycbwe14Kt1eojTHx5gxJQ2FwFyyszv2-AJXuNlVdDXjapLM2Dm68C68wH_mYwTw12SX1V/exec?customer=${encodeURIComponent(searchName)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        showAlert("No records found for this customer.");
        return;
      }

      const table = document.getElementById("itemTable");
      table.innerHTML = `
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th class="print-hide">Action</th>
        </tr>
      `;

      items = [];
      total = 0;

      data.forEach((record, index) => {
        const formattedDate = formatDate(record.date);
        const row = table.insertRow();
        row.innerHTML = `
          <td>${formattedDate}</td>
          <td>${record.item}</td>
          <td>${record.size}</td>
          <td>${record.qty}</td>
          <td>${record.price}</td>
          <td>${record.total}</td>
          <td class="print-hide">
            <button class="remove-btn" onclick="removeItem(this, ${record.total}, ${index})">Remove</button>
          </td>
        `;

        total += Number(record.total);
        items.push({
          date: record.date,
          name: record.item,
          size: record.size,
          qty: Number(record.qty),
          price: Number(record.price),
          total: Number(record.total)
        });
      });

      document.getElementById("grandTotal").innerText = total;

      const customerName = data[0].customerName || "-";
      const date = data[0].date || "-";
      document.getElementById("custDetails").innerText = `Customer: ${customerName} `;
      document.getElementById("customerName").value = customerName;
      document.getElementById("billDate").value = date;

      showAlert("✅ Records loaded! You can print now.");
    })
    .catch(err => showAlert("❌ Error fetching data: " + err));
}








