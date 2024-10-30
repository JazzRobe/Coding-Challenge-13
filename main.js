//task 2: fetch products from the API using fetch and promises

const productList = document.getElementById("productList");
//connecting html list to js list

fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response not ok.");
        }
        return response.json();
    }) //fetch the list from the api into json format
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement("li")
            listItem.textContent = `${product.fields.name} - $${product.fields.price}`;
            productList.appendChild(listItem);
        });
    }) //for each item in the list, display it on the html page
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    }); //display errors if any