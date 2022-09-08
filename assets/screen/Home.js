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
  const [selectedRow,setSelectedRow] = useState(false);
  const [selectedColumn,setSelectedColumn] = useState(false);
  
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
  const [ninetee4, setNineteen4] = useState(4);
  const [twenty, setTwenty] = useState();

  // Row4
  const [tw1, setTw1] = useState(5);
  const [tw2, setTw2] = useState(3);
  const [tw3, setTw3] = useState(8);
  const [tw4, setTw4] = useState(6);
  const [twenty1, setTwenty1] = useState();
  const [tw5, setTw5] = useState(2);
  const [tw6, setTw6] = useState(9);
  const [tw7, setTw7] = useState(1);
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
  const [th2, setTh2] = useState(7);
  const [th3, setTh3] = useState(8);
  const [thirty, setThirty] = useState();
  const [th4, setTh4] = useState(4);
  const [th5, setTh5] = useState(6);
  const [th6, setTh6] = useState(2);
  const [th7, setTh7] = useState(3);

  //Row7
  const [th8, setTh8] = useState(9);
  const [thirty1, setThirty1] = useState();
  const [th9, setTh9] = useState(3);
  const [th10, setTh10] = useState(4);
  const [thirty2, setThirty2] = useState();
  const [thirty3, setThirty3] = useState();
  const [thirty4, setThirty4] = useState();
  const [thirty5, setThirty5] = useState();
  const [thirty6, setThirty6] = useState();

  // Row8
  const [thirty7, setThirty7] = useState();
  const [four1, setFour1] = useState(7);
  const [four2, setFour2] = useState(5);
  const [thirty8, setThirty8] = useState();
  const [thirty9, setThirty9] = useState();
  const [fourty, setFourty] = useState();
  const [four3, setFour3] = useState(4);
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
  const [four6, setFour6] = useState(8);
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
    [sixteen, seventeen,eighteen,nineteen1,nineteen2,nineteen,ninetee3,ninetee4,twenty,],
    [tw1, tw2, tw3, tw4, twenty1, tw5, tw6, tw7, twenty2],
    [twenty3, tw8, twenty4, tw9, twenty5, tw10, twenty6, twenty7, twenty8],
    [th1, twenty9, th2, th3, thirty, th4, th5, th6, th7],
    [th8, thirty1, th9, th10, thirty2, thirty3, thirty4, thirty5, thirty6],
    [thirty7, four1, four2, thirty8, thirty9, fourty, four3, fourty1, four4],
    [fourty2,fourty3,fourty4,fourty5,four5,fourty6,fourty7,four6,fourty8,],
  ];

  const [arryval, setArryVal] = useState(arr);
  const numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const displayarr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const seletcolumn = (index, index1, column, row) => {
    setSelectedRow(row);
    setSelectedColumn(column)
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



  const itemBoxcolor = (index, index1 , row , column) => {
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

      if(one == undefined){
        return 'white'
      }else if ( one == five1  || one == eight1 || one == nine || one == ten || one == sixteen || one == seventeen || one == eighteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
  }

    if (index == 0 && index1 == 2) {
    if(two == undefined){
      return 'white'
    }else if ( two == one || two == five1  || two == eight1 || two == nine || two == ten || two == sixteen || two == seventeen || two == eighteen){
      return '#FFCCCB'
      
    }else{
      return 'lightcyan'
    }
    }

    //column2
    // nine1, three, four,
    if (index == 0 && index1 == 4) {

      if(three == undefined){
        return 'white'
      }else if ( three == nine1  || three == four || three == eleven || three == eleven1 || three == twile || three == nineteen1 || three == nineteen2 || three == nineteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }


    }
    if (index == 0 && index1 == 5) {
      if(four == undefined){
        return 'white'
      }else if ( four == nine1  || four == three || four == eleven || four == eleven1 || four == twile || four == nineteen1 || four == nineteen2 || four == nineteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
// five, six , seven
    //column3
    if (index == 0 && index1 == 6 ) {
      if(five == undefined){
        return 'white'
      }else if ( five == six  || five == seven ||five == thirteen1 || five == fourteen || five == fifteen1 ||  five == ninetee3 || five == ninetee4 || five == twenty){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 0 && index1 == 7) {

      if(six == undefined){
        return 'white'
      }else if ( six == five  || six == seven ||six == thirteen1 || six == fourteen || six == fifteen1 ||  six == ninetee3 || six == ninetee4 || six == twenty){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 0 && index1 == 8) {

      if(seven == undefined){
        return 'white'
      }else if ( seven == five  || seven == six ||seven == thirteen1 || seven == fourteen || seven == fifteen1 ||  seven == ninetee3 || seven == ninetee4 || seven == twenty){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // ------row2--------
    if (index == 1 && index1 == 1) {

      if(nine == undefined){
        return 'white'
      }else if ( nine == one || nine == five1 || nine == two  || nine == eight1 || nine == ten || nine == sixteen || nine == seventeen || nine == eighteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }

    if (index == 1 && index1 == 2) {

      if(ten == undefined){
        return 'white'
      }else if ( ten == one || ten == five1 || ten == two || ten == eight1 || ten == nine  || ten == sixteen || ten == seventeen || ten == eighteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    
    }

    //column2
    if (index == 1 && index1 == 3) {
      if(eleven == undefined){
        return 'white'
      }else if ( eleven == nine1  || eleven == three || eleven == eleven1 || eleven == twile || eleven == nineteen1 || eleven == nineteen2 || eleven == nineteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    if (index == 1 && index1 == 5) {
      
      if(twile == undefined){
        return 'white'
      }else if ( twile == nine1  || twile == three || twile == eleven1 || eleven == twile || twile == nineteen1 || twile == nineteen2 || twile == nineteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

      return twile == undefined ? 'white' : 'lightcyan';
    }
    //column3
    if (index == 1 && index1 == 7) {
      if(fourteen == undefined){
        return 'white'
      }else if ( fourteen == five  || fourteen == six || fourteen == seven ||fourteen == thirteen1 || fourteen == fifteen1 ||  fourteen == ninetee3 || fourteen == ninetee4 || fourteen == twenty){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }


      return fourteen == undefined ? 'white' : 'lightcyan';
    }
    // ----------row3------------
    if (index == 2 && index1 == 0) {

    if(sixteen == undefined){
      return 'white'
    }else if( sixteen == one || sixteen == five1  || sixteen == two || sixteen == eight1 || sixteen == nine || sixteen == ten || sixteen == seventeen || sixteen == eighteen){
      return '#FFCCCB'
    }
    else{
      return('lightcyan')
    }
    
    }
    if (index == 2 && index1 == 1) {
      if(seventeen == undefined){
        return 'white'
      }else if( seventeen == one || seventeen == five1 || seventeen == two || seventeen == eight1 || seventeen == nine || seventeen == ten || seventeen == sixteen || seventeen == eighteen){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 2 && index1 == 2) {

      if(eighteen == undefined){
        return 'white'
      }else if( eighteen == one || eighteen == five1 || eighteen == two || eighteen == eight1 || eighteen == nine || eighteen == ten || eighteen == sixteen || eighteen == seventeen ){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

     
    }
    //column2
    if (index == 2 && index1 == 5) {
      if(nineteen == undefined){
        return 'white'
      }else if ( nineteen == nine1  || nineteen == four || nineteen == three || nineteen == eleven || nineteen == eleven1 || nineteen == twile || nineteen == nineteen1 || nineteen == nineteen2 ){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    //column3
    if (index == 2 && index1 == 8) {

      if(twenty == undefined){
        return 'white'
      }else if ( twenty == five  || twenty == six || twenty == seven ||twenty == thirteen1 || twenty== fourteen || twenty == fifteen1 ||  twenty == ninetee3 || twenty == ninetee4 ){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
      return twenty == undefined ? 'white' : 'lightcyan';
    }
  
    // -----------row4-------------//3*2
    // column2
    if (index == 3 && index1 == 4) {
      if(twenty1 == undefined){
        return 'white'
      }else if ( twenty1 == tw4 || twenty1 == tw5 ||twenty1 == tw9 || twenty1== twenty5 || twenty1 == tw10 ||  twenty1 == th3 || twenty1 == thirty || twenty1 == th4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // column3
    if (index == 3 && index1 == 8) {
      if(twenty2 == undefined){
        return 'white'
      }else if ( twenty2 == tw6 || twenty2 == tw7 || twenty2== twenty6 || twenty2 == twenty7 ||  twenty2 == twenty8 || twenty2 == th5 || twenty2 == th6 || twenty2 == th7){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

      return twenty2 == undefined ? 'white' : 'lightcyan';
    }
    // ( twenty2 == tw6 || twenty2 == tw7 ||twenty2 == twenty2 || twenty2== twenty6 || twenty2 == twenty7 ||  twenty2 == twenty8 || twenty2 == th5 || twenty2 == th6 || twenty2 == th7)
    // ------------row5---------------
    if (index == 4 && index1 == 0) {

      if(twenty3 == undefined){
        return 'white'
      }else if ( twenty3 == tw1  || twenty3 == tw2 || twenty3 == tw3 ||twenty3 == twenty5 || twenty3== tw8 || twenty3 == twenty4 ||  twenty3 == th1 || twenty3 == twenty9 || twenty3 == th2){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    if (index == 4 && index1 == 2) {

      if(twenty4 == undefined){
        return 'white'
      }else if ( twenty4 == tw1 || twenty4 == tw2 || twenty4 == tw3 ||twenty4 == twenty5 || twenty4== tw8 || twenty3 == twenty4 ||  twenty4 == th1 || twenty4 == twenty9 || twenty4 == th2){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    //column2
    if (index == 4 && index1 == 4) {

      if(twenty5 == undefined){
        return 'white'
      }else if ( twenty5 == tw4 || twenty5 == twenty1 || twenty5 == tw5 ||twenty5 == tw9 || twenty5 == tw10 ||  twenty5 == th3 || twenty5 == thirty || twenty5 == th4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // column3
    if (index == 4 && index1 == 6) {
      if(twenty6 == undefined){
        return 'white'
      }else if ( twenty6 == tw6 || twenty6 == tw7 || twenty6== twenty2 || twenty6 == twenty7 ||  twenty6 == twenty8 || twenty6 == th5 || twenty6 == th6 || twenty6 == th7){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 4 && index1 == 7) {
      if(twenty7 == undefined){
        return 'white'
      }else if ( twenty7 == tw6 || twenty7 == tw7 || twenty7== twenty6 || twenty7 == twenty2 ||  twenty7 == twenty8 || twenty7 == th5 || twenty7 == th6 || twenty7 == th7){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    if (index == 4 && index1 == 8) {
      if(twenty8 == undefined){
        return 'white'
      }else if ( twenty8 == tw6 || twenty8 == tw7 || twenty8== twenty6 || twenty8 == twenty7 ||  twenty8 == twenty2 || twenty8 == th5 || twenty8 == th6 || twenty8 == th7){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    //  -------------row6-------------
    if (index == 5 && index1 == 1) {

      if(twenty9 == undefined){
        return 'white'
      }else if ( twenty9 == tw1 || twenty9 == tw2 || twenty9 == tw3 ||twenty9 == twenty4 || twenty9== tw8 || twenty9 == twenty3 ||  twenty9 == th1  || twenty9 == th2){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    //column2
    if (index == 5 && index1 == 4) {
      if(thirty == undefined){
        return 'white'
      }else if ( thirty == tw4  || thirty == tw5 ||thirty == tw9 || thirty == twenty5 ||  thirty == tw10 || thirty == th3 || thirty == th4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // ---------------row7--------------//3*3
    if (index == 6 && index1 == 1) {
if(thirty1 == undefined){
        return 'white'
      }else if ( thirty1 == th8  ||thirty1 == th9 || thirty1 == thirty7 ||  thirty1 == four1 || thirty1 == four2 || thirty1 == fourty2 || thirty1 == fourty3 || thirty1 == fourty4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }

    //column2
    if (index == 6 && index1 == 4) {
      if(thirty2 == undefined){
        return 'white'
      }else if ( thirty2 == th10  ||thirty2 == th9 || thirty2 == thirty3 ||  thirty2 == thirty8 || thirty2 == thirty9 || thirty2 == fourty || thirty2 == fourty5 ||thirty2 == four5 || thirty2 == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 6 && index1 == 5) {
      if(thirty3 == undefined){
        return 'white'
      }else if ( thirty3 == th10  ||thirty3 == th9 || thirty3 == thirty2 ||  thirty3 == thirty8 || thirty3 == thirty9 || thirty3 == fourty || thirty3 == fourty5 ||thirty3 == four5 || thirty3 == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

      return thirty3 == undefined ? 'white' : 'lightcyan';
    }
    //column3
    if (index == 6 && index1 == 6) {
      if(thirty4 == undefined){
        return 'white'
      }else if ( thirty4 == thirty5 || thirty4 == thirty6  || thirty4 == four3 || thirty4 == fourty1|| thirty4 == four4 ||thirty4 == fourty7 || thirty4 == four6 ||thirty4 == fourty8){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 6 && index1 == 7) {
      if(thirty5 == undefined){
        return 'white'
      }else if ( thirty5 == thirty4 || thirty5 == thirty6  || thirty5 == four3 || thirty5 == fourty1|| thirty5 == four4 ||thirty5 == fourty7 || thirty5 == four6 ||thirty5 == fourty8){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 6 && index1 == 8) {
      if(thirty6 == undefined){
        return 'white'
      }else if ( thirty6 == thirty4 || thirty6 == thirty5  || thirty6 == four3 || thirty6 == fourty1|| thirty6 == four4 ||thirty6 == fourty7 || thirty6 == four6 ||thirty6 == fourty8){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // -----------row8--------------
    if (index == 7 && index1 == 0) {
      if(thirty7 == undefined){
        return 'white'
      }else if ( thirty7 == th8  || thirty7 == thirty1 ||thirty7 == th9  ||  thirty7 == four1 || thirty7 == four2 || thirty7 == fourty2 || thirty7 == fourty3 || thirty7 == fourty4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    //column2
    if (index == 7 && index1 == 3) {

      if(thirty8 == undefined){
        return 'white'
      }else if ( thirty8 == th10  ||thirty8 == thirty2 || thirty8 == thirty3  || thirty8 == thirty9 || thirty8 == fourty || thirty8 == fourty5 ||thirty8 == four5 || thirty8 == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }


    }
    if (index == 7 && index1 == 4) {
      if(thirty9 == undefined){
        return 'white'
      }else if ( thirty9 == th10  ||thirty9 == thirty2 || thirty9 == thirty3  || thirty9 == thirty8 || thirty9 == fourty || thirty9 == fourty5 ||thirty9 == four5 || thirty9 == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    if (index == 7 && index1 == 5) {
      if(fourty == undefined){
        return 'white'
      }else if ( fourty == th10  ||fourty == thirty2 || fourty == thirty3  || fourty == thirty9 || fourty == thirty8|| fourty == fourty5 ||fourty == four5 || fourty == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    //column3
    if (index == 7 && index1 == 7) {
      if(fourty1 == undefined){
        return 'white'
      }else if ( fourty1 == thirty4  ||fourty1 == thirty5 || fourty1 == thirty6  || fourty1 == four3 || fourty1 == four4 ||fourty1 == fourty7 || fourty1 == four6 ||fourty1 == fourty8){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    // --------------row9------------
    if (index == 8 && index1 == 0) {
      if(fourty2 == undefined){
        return 'white'
      }else if ( fourty2 == th8  || fourty2 == thirty1 ||fourty2 == th9 || fourty2 == thirty7 ||  fourty2 == four1 || fourty2 == four2 || fourty2 == fourty3 || fourty2 == fourty4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 8 && index1 == 1) {
      if(fourty3 == undefined){
        return 'white'
      }else if ( fourty3 == th8  || fourty3 == thirty1 ||fourty3 == th9 || fourty3 == thirty7 ||  fourty3 == four1 || fourty3 == four2 || fourty3 == fourty2 || fourty3 == fourty4){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    if (index == 8 && index1 == 2) {
      if(fourty4 == undefined){
        return 'white'
      }else if ( fourty4 == th8  || fourty4 == thirty1 ||fourty4 == th9 || fourty4 == thirty7 ||  fourty4 == four1 || fourty4 == four2 || fourty4 == fourty2 || fourty4 == fourty3){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    //column2
    if (index == 8 && index1 == 3) {
      if(fourty5 == undefined){
        return 'white'
      }else if ( fourty5 == th10  ||fourty5 == thirty2 || fourty5 == thirty3  || fourty5 == thirty9 || fourty5 == thirty8|| fourty5 == fourty ||fourty5 == four5 || fourty5 == fourty6){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 8 && index1 == 5) {
      if(fourty6 == undefined){
        return 'white'
      }else if ( fourty6 == th10  ||fourty6 == thirty2 || fourty6 == thirty3  || fourty6 == thirty9 || fourty6 == thirty8|| fourty6 == fourty ||fourty6 == four5 || fourty6 == fourty5){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

      return fourty6 == undefined ? 'white' : 'lightcyan';
    }
    // column3
    if (index == 8 && index1 == 6) {
      if(fourty7 == undefined){
        return 'white'
      }else if ( fourty7 == thirty4  ||fourty7 == thirty5 || fourty7 == thirty6  || fourty7 == four3 || fourty7 == fourty1|| fourty7 == four4 || fourty7 == four6 ||fourty7 == fourty8){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }

    }
    if (index == 8 && index1 == 8) {

      if(fourty8 == undefined){
        return 'white'
      }else if ( fourty8 == thirty4  ||fourty8 == thirty5 || fourty8 == thirty6  || fourty8 == four3 || fourty8 == fourty1|| fourty8 == four4 ||fourty8 == fourty7 || fourty8 == four6 ){
        return '#FFCCCB'
      }
      else{
        return('lightcyan')
      }
    }
    // if(five == one) {
    //   return five == one ? 'red' : 'blue'
    //   }
  };

 const itemfontcolor = (index , index1 ,row ,column) =>{

  if(((selectedRow === row || selectedColumn === column )&& arr[column][row] === num)  ){
    return 'red'
   }else{
   return 'black'
   }
 
 
}
 
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
                        color:itemfontcolor(index , index1 ,row ,column),
                        backgroundColor: itemBoxcolor(index, index1),
                      }}
                    />
                     {/*  */}
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


