import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import Button from '../components/Button';
export default Home = () => {
  //num_set
  const [num, setNum] = useState();
  const [num1, setNum1] = useState();

  //for row and column
  // Row1
  const [one, setOne] = useState();
  console.log('🚀 ~ file: Home.js ~ line 19 ~ one', one);
  const [five1, setFive1] = useState(5);
  const [two, setTwo] = useState();
  const [nine1, setNine1] = useState(9);
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();
  const [seven, setSeven] = useState();
  //Row2

  const [eight1, setEight1] = useState(8);
  const [nine, setNine] = useState();
  const [ten, setTen] = useState();
  const [eleven, setEleven] = useState();
  const [eleven1, setEleven1] = useState(4);
  const [twile, setTwile] = useState();
  const [thirteen1, setThirteen] = useState(3);
  const [fourteen, setFourteen] = useState();
  const [fifteen1, setFifteen] = useState(7);
  //Row3
  const [sixteen, setSixteen] = useState();
  const [seventeen, setSeventeen] = useState();
  const [eighteen, setEighteen] = useState();
  const [nineteen1, setNineteen1] = useState(2);
  const [nineteen2, setNineteen2] = useState(8);
  const [nineteen, setNineteen] = useState();
  const [ninetee3, setNineteen3] = useState(1);
  const [ninetee4, setNineteen4] = useState(9);
  const [twenty, setTwenty] = useState();

  // Row4
  const [tw1, setTw1] = useState(5);
  const [tw2, setTw2] = useState(3);
  const [tw3, setTw3] = useState(8);
  const [tw4, setTw4] = useState(6);
  const [twenty1, setTwenty1] = useState();
  const [tw5, setTw5] = useState(7);
  const [tw6, setTw6] = useState(9);
  const [tw7, setTw7] = useState(4);
  const [twenty2, setTwenty2] = useState();

  //Row5
  const [twenty3, setTwenty3] = useState();
  const [tw8, setTw8] = useState(2);
  const [twenty4, setTwenty4] = useState();
  const [tw9, setTw9] = useState(3);
  const [twenty5, setTwenty5] = useState();
  const [tw10, setTw10] = useState(1);
  const [twenty6, setTwenty6] = useState();
  const [twenty7, setTwenty7] = useState();
  const [twenty8, setTwenty8] = useState();

  //Row6
  const [th1, setTh1] = useState(1);
  const [twenty9, setTwenty9] = useState();
  const [th2, setTh2] = useState(8);
  const [th3, setTh3] = useState(8);
  const [thirty, setThirty] = useState();
  const [th4, setTh4] = useState(4);
  const [th5, setTh5] = useState(6);
  const [th6, setTh6] = useState(2);
  const [th7, setTh7] = useState(3);

  //Row7
  const [th8, setTh8] = useState(9);
  const [thirty1, setThirty1] = useState();
  const [th9, setTh9] = useState(7);
  const [th10, setTh10] = useState(4);
  const [thirty2, setThirty2] = useState();
  const [thirty3, setThirty3] = useState();
  const [thirty4, setThirty4] = useState();
  const [thirty5, setThirty5] = useState();
  const [thirty6, setThirty6] = useState();

  // Row8
  const [thirty7, setThirty7] = useState();
  const [four1, setFour1] = useState(4);
  const [four2, setFour2] = useState(5);
  const [thirty8, setThirty8] = useState();
  const [thirty9, setThirty9] = useState();
  const [fourty, setFourty] = useState();
  const [four3, setFour3] = useState(2);
  const [fourty1, setFourty1] = useState();
  const [four4, setFour4] = useState(9);

  // Row9
  const [fourty2, setFourty2] = useState();
  const [fourty3, setFourty3] = useState();
  const [fourty4, setFourty4] = useState();
  const [fourty5, setFourty5] = useState();
  const [four5, setFour5] = useState(3);
  const [fourty6, setFourty6] = useState();
  const [fourty7, setFourty7] = useState();
  const [four6, setFour6] = useState(7);
  const [fourty8, setFourty8] = useState();

  //for colors
  const [bcolor, setBcolor] = useState('indianred');
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);
  const [value7, setValue7] = useState(false);
  const [value8, setValue8] = useState(false);
  const [value9, setValue9] = useState(false);

  //Array data
  const arr = [
    [one, five1, two, nine1, three, four, five, six, seven],
    [eight1, nine, ten, eleven, eleven1, twile, thirteen1, fourteen, fifteen1],
    [
      sixteen,
      seventeen,
      eighteen,
      nineteen1,
      nineteen2,
      nineteen,
      ninetee3,
      ninetee4,
      twenty,
    ],
    [tw1, tw2, tw3, tw4, twenty1, tw5, tw6, tw7, twenty2],
    [twenty3, tw8, twenty4, tw9, twenty5, tw10, twenty6, twenty7, twenty8],
    [th1, twenty9, th2, th3, thirty, th4, th5, th6, th7],
    [th8, thirty1, th9, th10, thirty2, thirty3, thirty4, thirty5, thirty6],
    [thirty7, four1, four2, thirty8, thirty9, fourty, four3, fourty1, four4],
    [
      fourty2,
      fourty3,
      fourty4,
      fourty5,
      four5,
      fourty6,
      fourty7,
      four6,
      fourty8,
    ],
  ];

  const [arryval, setArryVal] = useState(arr);
  const numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const displayarr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const seletcolumn = (index, index1, column, row) => {
    // console.log('column ---->', column);
    // console.log("🚀  row", row)
    // console.log('🚀 ~ file: Home.js ~ line 84 ~ seletcolumn ~ index1', index1);
    // console.log('🚀 ~ file: Home.js ~ line 84 ~ seletcolumn ~ index', index);

    //Row1
    console.log('index---->', index, 'index1----->', index1);
    if (index == 0 && index1 == 0) {
      setOne(num);
    }
    if (index == 0 && index1 == 2) {
      setTwo(num);
    }
    if (index == 0 && index1 == 4) {
      setThree(num);
    }
    if (index == 0 && index1 == 5) {
      setFour(num);
    }
    if (index == 0 && index1 == 6) {
      setFive(num);
    }
    if (index == 0 && index1 == 7) {
      setSix(num);
    }
    if (index == 0 && index1 == 8) {
      setSeven(num);
    }
   
    //Row2
    if (index == 1 && index1 == 1) {
      setNine(num);
    }
    if (index == 1 && index1 == 2) {
      setTen(num);
    }
    if (index == 1 && index1 == 3) {
      setEleven(num);
    }
    if (index == 1 && index1 == 5) {
      setTwile(num);
    }
    if (index == 1 && index1 == 7) {
      setFourteen(num);
    }
    //Row3
    if (index == 2 && index1 == 0) {
      setSixteen(num);
    }
    if (index == 2 && index1 == 1) {
      setSeventeen(num);
    }
    if (index == 2 && index1 == 2) {
      setEighteen(num);
    }
    if (index == 2 && index1 == 5) {
      setNineteen(num);
    }
    if (index == 2 && index1 == 8) {
      setTwenty(num);
    }

    //Row4
    if (index == 3 && index1 == 4) {
      setTwenty1(num);
    }
    if (index == 3 && index1 == 8) {
      setTwenty2(num);
    }
    //Row5
    if (index == 4 && index1 == 0) {
      setTwenty3(num);
    }
    if (index == 4 && index1 == 2) {
      setTwenty4(num);
    }
    if (index == 4 && index1 == 4) {
      setTwenty5(num);
    }
    if (index == 4 && index1 == 6) {
      setTwenty6(num);
    }
    if (index == 4 && index1 == 7) {
      setTwenty7(num);
    }
    if (index == 4 && index1 == 8) {
      setTwenty8(num);
    }
    //Row6
    if (index == 5 && index1 == 1) {
      setTwenty9(num);
    }
    if (index == 5 && index1 == 4) {
      setThirty(num);
    }
    //Row7
    if (index == 6 && index1 == 1) {
      setThirty1(num);
    }
    if (index == 6 && index1 == 4) {
      setThirty2(num);
    }
    if (index == 6 && index1 == 5) {
      setThirty3(num);
    }
    if (index == 6 && index1 == 6) {
      setThirty4(num);
    }
    if (index == 6 && index1 == 7) {
      setThirty5(num);
    }
    if (index == 6 && index1 == 8) {
      setThirty6(num);
    }

    //Row8
    if (index == 7 && index1 == 0) {
      setThirty7(num);
    }
    if (index == 7 && index1 == 3) {
      setThirty8(num);
    }
    if (index == 7 && index1 == 4) {
      setThirty9(num);
    }
    if (index == 7 && index1 == 5) {
      setFourty(num);
    }
    if (index == 7 && index1 == 7) {
      setFourty1(num);
    }
    //Row9
    if (index == 8 && index1 == 0) {
      setFourty2(num);
    }
    if (index == 8 && index1 == 1) {
      setFourty3(num);
    }
    if (index == 8 && index1 == 2) {
      setFourty4(num);
    }
    if (index == 8 && index1 == 3) {
      setFourty5(num);
    }
    if (index == 8 && index1 == 5) {
      setFourty6(num);
    }
    if (index == 8 && index1 == 6) {
      setFourty7(num);
    }
    if (index == 8 && index1 == 8) {
      setFourty8(num);
    }
  };

 const one1  = arr[1].find((item) => item == one)
 console.log("🚀 ~ file: Home.js ~ line 322 ~ one1", one1)



  if (one == undefined ) {
  } else if (
    five1 == one ||
    two == one ||
    nine1 == one ||
    three == one ||
    four == one ||
    five == one ||
    six == one ||
    seven == one ||

    eight1 == one ||
    sixteen == one ||
    tw1 == one ||
    twenty3 == one ||
    th1 == one ||
    th8 == one ||
    thirty7 == one ||
    fourty2 == one
  ) {
    console.log('1--->', 'have same value');
  }
  if(eight1 == undefined){

  }
  else if(
    one == eight1 ||
    sixteen == eight1 ||
    tw1 == eight1 ||
    twenty3 == eight1 ||
    th1 == eight1 ||
    th8 == eight1 ||
    thirty7 == eight1 ||
    fourty2 == eight1 || 
    // row2
    nine == eight1 || 
    ten == eight1 ||
    eleven == eight1 ||
    eleven1 == eight1 || 
    twile == eight1 ||
    thirteen1  == eight1 ||
    fourteen == eight1||
    fifteen1 == eight1

  ){
console.log('row2--> index1' ,'eight1')
  }
  if(sixteen == undefined){

  }
  else if(
    one == sixteen ||
    eight1 == sixteen ||
    tw1 == sixteen ||
    twenty3 == sixteen ||
    th1 == sixteen ||
    th8 == sixteen ||
    thirty7 == sixteen ||
    fourty2 == sixteen || 

   
    // row3
    seventeen == sixteen || 
    eighteen == sixteen ||
    nineteen == sixteen ||
    nineteen1 == sixteen || 
    nineteen2 == sixteen ||
    ninetee3  == sixteen ||
    ninetee4 == sixteen||
    twenty == sixteen

  ){
console.log('row3--> index1' ,'sixteen')
  }
  if(tw1 == undefined){

  }
  else if(
    one == tw1 ||
    eight1 == tw1 ||
    sixteen == tw1 || 
    twenty3 == tw1 ||
    th1 == tw1 ||
    th8 == tw1 ||
    thirty7 == tw1 ||
    fourty2 == tw1 || 

  
    // row4
    tw2 == tw1 || 
    tw3 == tw1 ||
    tw4== tw1 ||
    twenty1 == tw1 || 
    tw5 == tw1 ||
    tw6  == tw1 ||
    tw7 == tw1||
    twenty2 == tw1

  ){
console.log('row4--> index1' ,'sixteen')
  }
  if(twenty3 == undefined){

  }
  else if(
  
    one == twenty3 ||
    eight1 == twenty3 ||
    sixteen == twenty3 || 
    tw1 == twenty3 ||
    th1 == twenty3 ||
    th8 == twenty3 ||
    thirty7 == twenty3 ||
    fourty2 == twenty3 || 

  
    
    // row5
    tw8 == twenty3 || 
    twenty4 == twenty3 ||
    tw9== twenty3 ||
    twenty5 == twenty3 || 
    tw10 == twenty3 ||
    twenty6  == twenty3 ||
    twenty7 == twenty3||
    twenty8 == twenty3

  ){
console.log('row5--> index1' ,'sixteen')
  }
  if(th1 == undefined){

  }
  else if(

    one == th1 ||
    eight1 == th1 ||
    sixteen == th1 ||
    tw1 == th1 ||
    twenty3 == th1 ||
    th8 == th1 ||
    thirty7 == th1 ||
    fourty2 == th1 || 

    // row6
    twenty9 == th1 || 
    th2 == th1 ||
    th3== th1 ||
    twenty == th1 || 
    th4 == th1 ||
    th5  == th1 ||
    th6 == th1||
    th7 == th1

  ){
console.log('row6--> index1' ,'sixteen')
  }

  if(th8 == undefined){

  }
  else if(

    
    one == th8 ||
    eight1 == th8 ||
    sixteen == th8 ||
    tw1 == th8 ||
    twenty3 == th8 ||
    th1 == th8 ||
    thirty7 == th8 ||
    fourty2 == th8 || 
  
    // row7
    thirty1 == th8 || 
    th9 == th8 ||
    th10== th8 ||
    thirty2 == th8 || 
    thirty3 == th8 ||
    thirty4  == th8 ||
    thirty5 == th8||
    thirty6 == th8

  ){
console.log('row7--> index1' ,'sixteen')
  }
  if(thirty7 == undefined){

  }
  else if(
  //   one == one ||
  //   eight1 == one ||
  //  sixteen == one ||
  //  tw1 == one ||
  //  twenty3 == one ||
  //  thirty7 == one ||
  //  th8 == one ||
  //  thirty7 == one ||
  //  fourty2 == one
    
    one == thirty7 ||
    eight1 == thirty7 ||
    sixteen == thirty7 ||
    tw1 == thirty7 ||
    twenty3 == thirty7 ||
    th1 == thirty7 ||
    th8 == thirty7 ||
    fourty2 == thirty7 || 

    // row8
    four1 == thirty7 || 
    four2 == thirty7 ||
    thirty8== thirty7 ||
    twenty9 == thirty7 || 
    fourty == thirty7 ||
    four3  == thirty7 ||
    fourty1 == thirty7||
    four4 == thirty7

  ){
console.log('row8--> index1' ,'sixteen')
  }
  if(fourty2 == undefined){

  }
  else if(
    one == fourty2 ||
    eight1 == fourty2 ||
    sixteen == fourty2 ||
    tw1 == fourty2 ||
    twenty3 == fourty2 ||
    th1 == fourty2 ||
    th8 == fourty2 ||
    thirty7 == fourty2 || 

    // row9
    tw8 == fourty2 || 
    twenty4 == fourty2 ||
    tw9== fourty2 ||
    twenty5 == fourty2 || 
    tw10 == fourty2 ||
    twenty6  == fourty2 ||
    twenty7 == fourty2||
    twenty8 == fourty2

  ){
console.log('row9--> index1' ,'sixteen')
  }

  if (five1 == undefined) {
  } else if (
    one == five1 ||
    nine1 == five1 ||
    three == five1 ||
    four == five1 ||
    five == five1 ||
    six == five1 ||
    seven == five1 ||
    nine == five1 ||
    seventeen == five1 ||
    tw2 == five1 ||
    tw8 == five1 ||
    twenty9 == five1 ||
    thirty1 == five1 ||
    four1 == five1 ||
    fourty3 == five1
  ) {
    console.log('5--->', 'have same value');
  }
  if (two == undefined) {
  } else if (
    one == two ||
    five1 == two ||
    nine1 == two ||
    three == two ||
    four == two ||
    five == two ||
    six == two ||
    seven == two ||
    ten == two ||
    eighteen == two ||
    tw3 == two ||
    twenty4 == two ||
    th2 == two ||
    th9 == two ||
    four2 == two ||
    fourty4 == two
  ) {
    console.log('2--->', 'have same value');
  }
  if (nine1 == undefined) {
  } else if (
    one == nine1 ||
    two == nine1 ||
    five1 == nine1 ||
    three == nine1 ||
    four == nine1 ||
    five == nine1 ||
    six == nine1 ||
    seven == nine1 ||
    eleven == nine1 ||
    nineteen1 == nine1 ||
    tw4 == nine1 ||
    tw9 == nine1 ||
    th3 == nine1 ||
    th10 == nine1 ||
    thirty8 == nine1 ||
    fourty5 == nine1
  ) {
    console.log('9--->', 'have same value');
  }
  if (three == undefined) {
  } else if (
    one == three ||
    two == three ||
    nine1 == three ||
    five1 == three ||
    four == three ||
    five == three ||
    six == three ||
    seven == three ||
    eleven1 == three ||
    nineteen2 == three ||
    twenty1 == three ||
    twenty5 == three ||
    thirty == three ||
    twenty2 == three ||
    thirty9 == three ||
    four5 == three
  ) {
    console.log('3--->', 'have same value');
  }
  if (four == undefined) {
  } else if (
    one == four ||
    two == four ||
    three == four ||
    five1 == four ||
    nine1 == four ||
    five == four ||
    six == four ||
    seven == four ||
    twile == four ||
    nineteen == four ||
    tw5 == four ||
    tw10 == four ||
    th4 == four ||
    thirty3 == four ||
    fourty == four ||
    fourty6 == four
  ) {
    console.log('4--->', 'have same value');
  }
  if (five == undefined) {
  } else if (
    one == five ||
    two == five ||
    three == five ||
    four == five ||
    nine1 == five ||
    five1 == five ||
    five == five ||
    six == five ||
    seven == five ||
    thirteen1 == five ||
    ninetee3 == five ||
    tw6 == five ||
    twenty6 == five ||
    th5 == five ||
    thirty4 == five ||
    four3 == five ||
    fourty7 == five
  ) {
    console.log('official-5---->', 'have same value');
  }
  if (six == undefined) {
  } else if (
    one == six ||
    two == six ||
    three == six ||
    four == six ||
    nine1 == six ||
    five1 == five ||
    five == six ||
    seven == six ||
    fourteen == six ||
    ninetee4 == six ||
    tw7 == six ||
    twenty7 == six ||
    th6 == six ||
    thirty5 == six ||
    fourty1 == six ||
    four6 == six
  ) {
    console.log('six---->', 'have same value');
  }
  if (seven == undefined) {
    console.log('not have value');
  } else if (
    one == seven ||
    two == seven ||
    three == seven ||
    four == seven ||
    nine1 == seven ||
    five1 == seven ||
    five == seven ||
    six == seven ||
    fifteen1 == seven ||
    twenty == seven ||
    twenty8 == seven ||
    th7 == seven ||
    thirty6 == seven ||
    four4 == seven ||
    fourty8 == seven
  ) {
    console.log('seven---->', 'have same value');
  }
  const undo = () => {};
  const selectnum = (number, index) => {
    setNum(number);
    if (number == 1) {
      setValue1(true);
    } else {
      setValue1(false);
    }
    if (number == 2) {
      setValue2(true);
    } else {
      setValue2(false);
    }
    if (number == 3) {
      setValue3(true);
    } else {
      setValue3(false);
    }
    if (number == 4) {
      setValue4(true);
    } else {
      setValue4(false);
    }
    if (number == 5) {
      setValue5(true);
    } else {
      setValue5(false);
    }
    if (number == 6) {
      setValue6(true);
    } else {
      setValue6(false);
    }
    if (number == 7) {
      setValue7(true);
    } else {
      setValue7(false);
    }
    if (number == 8) {
      setValue8(true);
    } else {
      setValue8(false);
    }
    if (number == 9) {
      setValue9(true);
    } else {
      setValue9(false);
    }
  };
  const color = 'red';
  const itemColors = (index, index1) => {
    switch (index) {
      case 2:
        return color;
      case 5:
        return color;
    }
    switch (index1) {
      case 2:
        return color;
      case 5:
        return color;
    }
  };
  const rightwidth = 2;
  const itemBottomwidth = index1 => {
    switch (index1) {
      case 2:
        return rightwidth;
      case 5:
        return rightwidth;
    }
  };
  const itemRightwidth = index1 => {
    switch (index1) {
      case 2:
        return rightwidth;
      case 5:
        return rightwidth;
    }
  };
  const setNumcolor = number => {
    switch (number) {
      case 1:
        return value1 ? 'red' : 'black';
      case 2:
        return value2 ? 'red' : 'black';
      case 3:
        return value3 ? 'red' : 'black';
      case 4:
        return value4 ? 'red' : 'black';
      case 5:
        return value5 ? 'red' : 'black';
      case 6:
        return value6 ? 'red' : 'black';
      case 7:
        return value7 ? 'red' : 'black';
      case 8:
        return value8 ? 'red' : 'black';
      case 9:
        return value9 ? 'red' : 'black';
    }
  };
  // arr[0].map((item) => {
  //   console.log('item====>', item);
  // })



  const itemBoxcolor = (index, index1) => {
    if (
      (index == 0 && index1 == 1) ||
      (index == 0 && index1 == 3) ||
      (index == 1 && index1 == 0) ||
      (index == 1 && index1 == 4) ||
      (index == 1 && index1 == 6) ||
      (index == 1 && index1 == 8) ||
      (index == 2 && index1 == 3) ||
      (index == 2 && index1 == 4) ||
      (index == 2 && index1 == 6) ||
      (index == 2 && index1 == 7) ||
      (index == 3 && index1 == 0) ||
      (index == 3 && index1 == 1) ||
      (index == 3 && index1 == 2) ||
      (index == 3 && index1 == 3) ||
      (index == 3 && index1 == 5) ||
      (index == 3 && index1 == 6) ||
      (index == 3 && index1 == 7) ||
      (index == 4 && index1 == 1) ||
      (index == 4 && index1 == 3) ||
      (index == 4 && index1 == 5) ||
      (index == 5 && index1 == 0) ||
      (index == 5 && index1 == 2) ||
      (index == 5 && index1 == 3) ||
      (index == 5 && index1 == 5) ||
      (index == 5 && index1 == 6) ||
      (index == 5 && index1 == 7) ||
      (index == 5 && index1 == 8) ||
      (index == 6 && index1 == 0) ||
      (index == 6 && index1 == 2) ||
      (index == 6 && index1 == 3) ||
      (index == 7 && index1 == 1) ||
      (index == 7 && index1 == 2) ||
      (index == 7 && index1 == 6) ||
      (index == 7 && index1 == 8) ||
      (index == 8 && index1 == 4) ||
      (index == 8 && index1 == 7)
    ) {
      return 'lavender';
    }
    // --------row1----------
    if (index == 0 && index1 == 0) {
      return one == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 2) {
      return two == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 4) {
      return three == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 5) {
      return four == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 6) {
      return five == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 7) {
      return six == undefined ? 'white' : 'lightcyan';
    }
    if (index == 0 && index1 == 8) {
      return seven == undefined ? 'white' : 'lightcyan';
    }
    // ------row2--------
    if (index == 1 && index1 == 1) {
      return nine == undefined ? 'white' : 'lightcyan';
    }
    if (index == 1 && index1 == 2) {
      return ten == undefined ? 'white' : 'lightcyan';
    }
    if (index == 1 && index1 == 3) {
      return eleven == undefined ? 'white' : 'lightcyan';
    }
    if (index == 1 && index1 == 5) {
      return twile == undefined ? 'white' : 'lightcyan';
    }
    if (index == 1 && index1 == 7) {
      return fourteen == undefined ? 'white' : 'lightcyan';
    }
    // ----------row3------------
    if (index == 2 && index1 == 0) {
      return sixteen == undefined ? 'white' : 'lightcyan';
    }
    if (index == 2 && index1 == 1) {
      return seventeen == undefined ? 'white' : 'lightcyan';
    }
    if (index == 2 && index1 == 2) {
      return eighteen == undefined ? 'white' : 'lightcyan';
    }
    if (index == 2 && index1 == 5) {
      return nineteen == undefined ? 'white' : 'lightcyan';
    }
    if (index == 2 && index1 == 8) {
      return twenty == undefined ? 'white' : 'lightcyan';
    }
    // -----------row4-------------
    if (index == 3 && index1 == 4) {
      return twenty1 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 3 && index1 == 8) {
      return twenty2 == undefined ? 'white' : 'lightcyan';
    }
    // ------------row5---------------
    if (index == 4 && index1 == 0) {
      return twenty3 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 4 && index1 == 2) {
      return twenty4 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 4 && index1 == 4) {
      return twenty5 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 4 && index1 == 6) {
      return twenty6 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 4 && index1 == 7) {
      return twenty7 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 4 && index1 == 8) {
      return twenty8 == undefined ? 'white' : 'lightcyan';
    }
    //  -------------row6-------------
    if (index == 5 && index1 == 1) {
      return twenty9 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 5 && index1 == 4) {
      return thirty == undefined ? 'white' : 'lightcyan';
    }
    // ---------------row7--------------
    if (index == 6 && index1 == 1) {
      return thirty1 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 6 && index1 == 4) {
      return thirty2 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 6 && index1 == 5) {
      return thirty3 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 6 && index1 == 6) {
      return thirty4 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 6 && index1 == 7) {
      return thirty5 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 6 && index1 == 8) {
      return thirty6 == undefined ? 'white' : 'lightcyan';
    }
    // -----------row8--------------
    if (index == 7 && index1 == 0) {
      return thirty7 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 7 && index1 == 3) {
      return thirty8 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 7 && index1 == 4) {
      return thirty9 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 7 && index1 == 5) {
      return fourty == undefined ? 'white' : 'lightcyan';
    }
    if (index == 7 && index1 == 7) {
      return fourty1 == undefined ? 'white' : 'lightcyan';
    }
    // --------------row9------------
    if (index == 8 && index1 == 0) {
      return fourty2 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 1) {
      return fourty3 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 2) {
      return fourty4 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 3) {
      return fourty5 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 5) {
      return fourty6 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 6) {
      return fourty7 == undefined ? 'white' : 'lightcyan';
    }
    if (index == 8 && index1 == 8) {
      return fourty8 == undefined ? 'white' : 'lightcyan';
    }
  };

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <Text style={{fontWeight: '500', fontSize: 20, padding: 15}}>SUDOKU</Text>
      <ScrollView scrollEnabled={false} horizontal={true}>
        {displayarr.map((row, index1) => {
          // console.log("🚀 ~ file: Home.js ~ line 377 ~ {displayarr.map ~ row", arr[index1])
          return (
            <View>
              {displayarr.map((column, index) => {
                // console.log("🚀 ~ file: Home.js ~ line 381 ~ {displayarr.map ~ column", column)
                return (
                  <View>
                    <Button
                      externalStyle={{
                        borderWidth: 0.6,
                        borderRightWidth: itemRightwidth(index1),
                        borderRightColor: itemColors(index1),
                        borderBottomWidth: itemBottomwidth(index),
                        borderBottomColor: itemColors(index),
                      }}
                      onPress={() => seletcolumn(index, index1, column, row)}
                      name={arr[column][row]}
                      style2={{
                        textAlign: 'center',
                        fontSize: 20,
                        color: 'black',
                        backgroundColor: itemBoxcolor(index, index1),
                      }}
                    />
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <View style={{margin: 30}}>
        <TouchableHighlight
          onPress={() => undo()}
          activeOpacity={0.5}
          underlayColor="indianred"
          style={{borderRadius: 40 / 2}}>
          <Text
            style={{
              borderWidth: 0.6,
              padding: 10,
              borderRadius: 40 / 2,
              color: 'indianred',
            }}>
            Undo
          </Text>
        </TouchableHighlight>
      </View>
      <ScrollView
        scrollEnabled={false}
        horizontal={true}
        style={{marginTop: '5%'}}>
        {numarr.map((number, index) => {
          return (
            <>
              <TouchableHighlight
                onPress={() => selectnum(number)}
                activeOpacity={0.5}
                underlayColor="indianred">
                <Text
                  style={{
                    borderWidth: 0.6,
                    padding: 10,
                    color: setNumcolor(number),
                  }}>
                  {number}
                </Text>
              </TouchableHighlight>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
