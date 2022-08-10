import React, { useState } from 'react';
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles.js';
import CarSale from './CarSale/index.js'
import CompassList from './CompassList.js';
import { render } from 'react-dom';
import { FlatGrid } from 'react-native-super-grid';
import DropDownPicker from 'react-native-dropdown-picker';

const InventoryPage = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("expensive");
    const [items, setItems] = useState([
        {label: 'Sort by: Price↑', value: 'expensive'},
        {label: 'Sort by: Price↓', value: 'cheapest'},
        {label: 'Sort by: Year↑', value: 'newest'},
        {label: 'Sort by: Year↓', value: 'oldest'},
    ]);
    const[carItems, setcarItems] = useState(
        CompassList.map((CompassCar, index) => ({
            id: CompassCar.id,
            year: CompassCar.year,
            trim: CompassCar.trim,
            price: CompassCar.price,
            image: CompassCar.image,
        }))
    );
    const [empty, setEmpty] = useState(Array.isArray(carItems) ? [...carItems]==[] : false);
    let sortbyNewest=Array.isArray(carItems) ? [...carItems].sort((a,b) => b.year - a.year) : [];
    let sortbyOldest=Array.isArray(carItems) ? [...carItems].sort((a,b) => a.year - b.year) : [];
    let sortbyExpensive=Array.isArray(carItems) ? [...carItems].sort((a,b) => b.price - a.price): [];
    let sortbyCheapest=Array.isArray(carItems) ? [...carItems].sort((a,b) => a.price - b.price): [];
    const handleDelete = (id) => {
        Alert.alert('Purchased!');
        const carList= carItems.filter(car => car.id != id);
        if (carList=== undefined || carList.length==0 ) {
            setEmpty(true)
        }
        setcarItems(carList);
    }

    const handleSortChange = (value) => {
        if (value==="expensive"){
            setcarItems(sortbyExpensive)
        }
        else if (value=="cheapest"){
            setcarItems(sortbyCheapest)
        }
        else if (value=="newest"){
            setcarItems(sortbyNewest)
        }
        else {
            setcarItems(sortbyOldest)
        }
        return
    }
    let renderItems;
    if (carItems=== undefined || carItems.length==0 ){
        renderItems= <Text style={styles.emptyInventory}> No cars in inventory </Text>
    }
    else{
        renderItems=<View style={styles.pageContainer}>
            <DropDownPicker
            open={open}
            items={items}
            value={value}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={value => handleSortChange(value)}
            containerStyle={styles.dropDown}
            activeItemStyle ={{
                justifyContent: "center",
                alignItems: "center"
              }}
        />
        <FlatGrid itemDimension={130}
        data={carItems}
        style={styles.gridView}
        spacing={20}
        renderItem={ ({ item }) => (
            <View>
                <CarSale id={item.id} year={item.year} price={item.price} trim={item.trim} image={item.image} onDelete={handleDelete}/>
            </View>
        )}/>
        </View>
    }
    return(
        <View style={styles.pageContainer}>    
        {renderItems}
        </View>
    );
};

export default InventoryPage;