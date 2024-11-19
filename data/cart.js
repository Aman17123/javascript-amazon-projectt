export const cart= [];

export function addtoCart(productId){
    let matchingItem; // cart 

    cart.forEach((CARTitem) => {
      if(productId === CARTitem.productId){
        matchingItem = CARTitem;
      }
    });

    if (matchingItem){
      matchingItem.quantity += 1;
    }
    else{  
      cart.push({
        productId: productId,
        quantity: 1
      }); 
    }
  }
