//task 2: fetch products from the API using fetch and promises

const productList = document.getElementById("productList");
const productImages = document.getElementById("productImages");
//connecting html list to js list

fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response not ok.");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement("li");

            const productImage = document.createElement("img");
            productImage.src = product.fields.image[0].url;
            productImage.alt = product.fields.name;
            productImage.style.width = "250px"; 
            //using forEach to show each product's name under the image

            const productInfo = document.createElement("p");
            productInfo.textContent = `${product.fields.company}: ${product.fields.name}, $${product.fields.price}`;
            //display the product company/brand, name, and price

            listItem.appendChild(productImage);
            listItem.appendChild(productInfo);
            productList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    }); //catch any errors, if any

//task 3: display product details dynamically
//already showed name, price, image--added company name