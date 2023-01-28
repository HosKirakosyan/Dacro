const slider_all = document.getElementById('slider_all');
const slider_breakfast = document.getElementById('slider_breakfast');
const slider_lunch = document.getElementById('slider_lunch');
const slider_dinner = document.getElementById('slider_dinner');
const slider_budget = document.getElementById('slider_budget');
const slider_buffet = document.getElementById('slider_buffet');

const all_item = document.getElementById('all_item');
const breakfast_item = document.getElementById('breakfast_item');
const lunch_item = document.getElementById('lunch_item');
const dinner_item = document.getElementById('dinner_item');
const budget_item = document.getElementById('budget_item');
const buffet_item = document.getElementById('buffet_item');



slider_all.onclick = function(){
    slider_all.classList.toggle('is-active');
    slider_breakfast.classList.remove('is-active');
    slider_lunch.classList.remove('is-active');
    slider_dinner.classList.remove('is-active');
    slider_budget.classList.remove('is-active');
    slider_buffet.classList.remove('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    lunch_item.classList.remove('is-active');
    dinner_item.classList.remove('is-active');
    budget_item.classList.remove('is-active');
    buffet_item.classList.remove('is-active');

    all_item.classList.toggle('is-active');
    breakfast_item.classList.toggle('is-active');
    lunch_item.classList.toggle('is-active');
    dinner_item.classList.toggle('is-active');
    budget_item.classList.toggle('is-active');
    buffet_item.classList.toggle('is-active');

};

slider_breakfast.onclick = function(){
    slider_all.classList.remove('is-active');
    slider_breakfast.classList.toggle('is-active');
    slider_lunch.classList.remove('is-active');
    slider_dinner.classList.remove('is-active');
    slider_budget.classList.remove('is-active');
    buffet_item.classList.remove('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    breakfast_item.classList.toggle('is-active');
    lunch_item.classList.remove('is-active');
    dinner_item.classList.remove('is-active');
    dinner_item.classList.toggle('is-active');
    budget_item.classList.remove('is-active');
    buffet_item.classList.remove('is-active')

};

slider_lunch.onclick = function(){
    slider_all.classList.remove('is-active');
    slider_breakfast.classList.remove('is-active');
    slider_lunch.classList.toggle('is-active');
    slider_dinner.classList.remove('is-active');
    slider_budget.classList.remove('is-active');
    slider_buffet.classList.remove('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    lunch_item.classList.remove('is-active');
    lunch_item.classList.toggle('is-active');
    dinner_item.classList.remove('is-active');
    budget_item.classList.remove('is-active');
    buffet_item.classList.remove('is-active')

};

slider_dinner.onclick = function(){
    slider_all.classList.remove('is-active');
    slider_breakfast.classList.remove('is-active');
    slider_lunch.classList.remove('is-active');
    slider_dinner.classList.toggle('is-active');
    slider_budget.classList.remove('is-active');
    slider_buffet.classList.remove('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    lunch_item.classList.remove('is-active');
    dinner_item.classList.remove('is-active');
    dinner_item.classList.toggle('is-active');
    budget_item.classList.remove('is-active');
    buffet_item.classList.remove('is-active')

};

slider_budget.onclick = function(){
    slider_all.classList.remove('is-active');
    slider_breakfast.classList.remove('is-active');
    slider_lunch.classList.remove('is-active');
    slider_dinner.classList.remove('is-active');
    slider_budget.classList.toggle('is-active');
    slider_buffet.classList.remove('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    lunch_item.classList.remove('is-active');
    dinner_item.classList.remove('is-active');
    budget_item.classList.remove('is-active');
    budget_item.classList.toggle('is-active');
    buffet_item.classList.remove('is-active')

};

slider_buffet.onclick = function(){
    slider_all.classList.remove('is-active');
    slider_breakfast.classList.remove('is-active');
    slider_lunch.classList.remove('is-active');
    slider_dinner.classList.remove('is-active');
    slider_budget.classList.remove('is-active');
    slider_buffet.classList.toggle('is-active');

    all_item.classList.remove('is-active');
    breakfast_item.classList.remove('is-active');
    lunch_item.classList.remove('is-active');
    dinner_item.classList.remove('is-active');
    budget_item.classList.remove('is-active');
    buffet_item.classList.remove('is-active')
    buffet_item.classList.toggle('is-active')

};