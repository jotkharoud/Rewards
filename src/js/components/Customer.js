import React from 'react';



class Customer extends React.Component{
    render(){
        const brands = ['Frank', 'Cici', 'Akbat', 'Noora', 'Harsh', 'Jot', 'Preet', 'Chann', 'Kaura'];

const groups = brands.reduce((groups, brand) => {
  const letterKey = brand.charAt(0).toLowerCase();
  (groups[letterKey] || (groups[letterKey] = [])).push(brand);
  return groups;
}, {});


Object.entries(groups).sort().map(([letterKey, brands]) => {
  console.log('KEY', letterKey);
  brands.map(brand => console.log('\tbrand', brand));
});
        return(
            <div>
                <span>`Customer names are ${brands}`</span>
            </div>
        )
    }
}

export default Customer;