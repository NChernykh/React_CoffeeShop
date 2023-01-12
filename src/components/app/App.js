import './app.scss';
import { Component } from 'react';
import AppHeader from "../appHeader/AppHeader";
import Intro from "../intro/Intro";
import About from "../about/About";
import AppFooter from "../appFooter/AppFooter";
import data from '../data/data';
import CoffeeList from '../coffeeList/CoffeeList';
import Search from '../search/Search';
import Filter from '../filter/Filter';
import ProductInfo from '../productInfo/ProductInfo';

class App extends Component {

  state = {
    term: '',
    filter: '',
    selectedItem: null
  }

  bestData = (items) => {
    return items.filter(item => item.best)
  }

  searchItem = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'Brazil':
      case 'Kenia':
      case 'Columbia':
        return items.filter(item => item.country === filter);
      default:
        return items
    }
  }

  onUpdateSearch = (liftTerm) => {
    this.setState({
      term: liftTerm
    })
  }

  onFilterSelect = (filter) => {
    this.setState({
      filter: filter 
    })
  }

  onItemSelected = (id) => {
    this.setState({
        selectedItem: id
    })
}
  
  render() {
    const {term, filter, selectedItem} = this.state;
    const bestData = this.bestData(data);
    const visibleData = this.filterPost(this.searchItem(data, term), filter);

    return (
      <div className='app'>
        <AppHeader/>
        <main>
          <Intro/>
          <About/>
          <section className='best'>
            <h2 className='title'>Our Best</h2>
            <CoffeeList 
              data={bestData}/> 
          </section>
          <section className='filter-panel'>
            <Search
              onUpdateSearch={this.onUpdateSearch}/> 
            <Filter
              filter={filter}
              onFilterSelect={this.onFilterSelect}/>  
          </section>  
          <section className='products'>
              <CoffeeList data={visibleData} onItemSelected={this.onItemSelected}/>
              <ProductInfo selectedId={selectedItem}/>
          </section>
        </main>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
