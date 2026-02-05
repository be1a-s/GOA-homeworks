
// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

//  Remove All The Marked Elements of a List

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(x => !values_list.includes(x));
}