let form = document.querySelector('form');
let out = document.getElementById('output');
var api = "https://crudcrud.com/api/";
var uniqueID = "281ad826f812448d98e12498c7d54424/";

async function getData() {
  try {
    const res = await axios.get(`${api}${uniqueID}candies/`);
    for (let i = 0; i < res.data.length; i++) {
      showdata(res.data[i]);
    }
  } catch (err) {
    console.log('error');
  }
}

window.addEventListener('DOMContentLoaded', getData);

let sbmt = document.getElementById('submit');
sbmt.addEventListener('click', async (sub) => {
  sub.preventDefault();
  let candy = document.getElementById('candy_name').value;
  let description = document.getElementById('description').value;
  let price = document.getElementById('price').value;
  let quantity = document.getElementById('quantity').value;
  obj = {
    name: candy,
    description: description,
    price: price,
    quantity: quantity
  };
  try {
    const resp = await axios.post(`${api}${uniqueID}candies/`, obj);
    console.log(resp.data);
    showdata(resp.data);
  } catch (err) {
    document.getElementById('h5').innerText = "something went wrong....";
  }
})

function showdata(data) {
  console.log(data);
  let div = document.createElement('div');
  out.appendChild(div);

  let txt = document.createTextNode(data.name + " " + data.description + " " + data.price + " " + data.quantity + " ");
  txt.id = "tx";
  div.appendChild(txt);

  let by1=document.createElement('input');
    by1.type='button';
    by1.value='buy 1';
    by1.addEventListener('click', async (buy) => {
        if (data.quantity >= 1) {
          objnew = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: +data.quantity - 1,
          }
          const newqt = +data.quantity - 1;
    
          console.log(objnew);
          try {
            if(newqt==0)
            {
              // axios.delete()
              await axios.delete(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`);  
              location.reload();
            }
            else{
                await axios.put(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`, objnew);
                console.log(div.firstElementChild);
                div.firstChild.textContent = `${data.name} ${data.description} ${data.price} ${newqt} `;
                console.log(div.firstChild);
                location.reload();
            }
          } catch (err) {
            console.log(err);
          }
        }
      })

  let by2=document.createElement('input');
    by2.type='button';
    by2.value='buy 2';
    by2.addEventListener('click', async (buy) => {
        if (data.quantity >= 2) {
          objnew = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: +data.quantity - 2,
          }
          const newqt = +data.quantity - 2;
    
          console.log(objnew);
          try {
            if(newqt==0)
            {
              // axios.delete()
              await axios.delete(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`);  
              location.reload();
            }
            else
            {
                await axios.put(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`, objnew);
                console.log(div.firstElementChild);
                div.firstChild.textContent = `${data.name} ${data.description} ${data.price} ${newqt} `;
                console.log(div.firstChild);
        
                location.reload();
            }
          } catch (err) {
            console.log(err);
          }
        }
      })

  let by3=document.createElement('input');
    by3.type='button';
    by3.value='buy 3';
    by3.addEventListener('click', async (buy) => {
        if (data.quantity >= 3) {
          objnew = {
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: +data.quantity - 3,
          }
          const newqt = +data.quantity - 3;
    
          console.log(objnew);
          try {
            if(newqt==0)
            {
              // axios.delete()
              await axios.delete(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`);  
              location.reload();
            }
            else
            {
                await axios.put(`https://crudcrud.com/api/281ad826f812448d98e12498c7d54424/candies/${data._id}`, objnew);
                console.log(div.firstElementChild);
                div.firstChild.textContent = `${data.name} ${data.description} ${data.price} ${newqt} `;
                console.log(div.firstChild);
        
                location.reload();
            }

          } catch (err) {
            console.log(err);
          }
        }
      })

      div.appendChild(by1)
      div.appendChild(by2)
      div.appendChild(by3)
  }
