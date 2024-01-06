let id = '';

async function populateEditForm(productId) {
    id = productId;
    try {
        const response = await fetch(`${url}${productId}`, {
            headers: {
                "Authorization": token,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });

        if (!response.ok) {
            throw new Error(`Errore nella richiesta: ${response.status}`);
        }

        const productDetails = await response.json();
        fillFormFields(productDetails);
    } catch (error) {
        console.error(error);
    }
}

function fillFormFields(productDetails) {
    document.getElementById("editName").value = productDetails.name;
    document.getElementById("editDescription").value = productDetails.description;
    document.getElementById("editPrice").value = productDetails.price;
}

async function saveChanges() {
    try {
        const newRecord = {
            "name": document.getElementById("editName").value,
            "description": document.getElementById("editDescription").value,
            "price": document.getElementById("editPrice").value,
        };

        let response = await fetch(`${url}${id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(newRecord)
        });

        // Wait for the response to be parsed
        const result = await response.json();
        closeWindow();
    } catch (error) {
        console.log(error);
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
        populateEditForm(productId);
    }
};





 function closeWindow() {
    
    saveChanges(); // Wait for the changes to be saved
    
    setTimeout(() => {
        window.opener.location.reload();
        window.close(); // Close the current window after a small delay
    }, 1000);
}

