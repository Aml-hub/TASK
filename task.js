let products = [
    {
        name: "lap top dell ram",
        price: 30000,
        description: "laptop dell core i5 hard ssd 1 tera"
    },
    {
        name: "lap top mac",
        price: 50000,
        description: "laptop hp core i5 ram 32"
    },
    {
        name: "lap top hp",
        price: 40000,
        description: "laptop hp core i7 hard ssd .5 tera"
    }
];

function searchProduct() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const tableBody = document.querySelector("#resultsTable tbody");
    tableBody.innerHTML = ""; // Clear previous results

    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    filteredProducts.forEach(product => {
        let row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    if (filteredProducts.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No products found</td></tr>`;
    }
}