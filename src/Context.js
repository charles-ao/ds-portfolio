import React, { useState, useContext, useEffect} from 'react';
import portfolioData from '../src/data/portfolio-data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navStatus, setNavStatus] = useState(false);
  const[scrollPosition, setScrollPosition] = useState(0)
  const [data, setData] = useState([])
  const [expansion, setExpansion] = useState(false)



  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  }

  useEffect(() => {
    setData(portfolioData.slice(0,6))
  }, [])
 
  const showAllProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    setData(portfolioData.slice(0,6))
    e.currentTarget.classList.add('active');
    
  }
  
  const showFrontendProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    const frontend = portfolioData.filter(project => project.category === "frontend")
    setData(frontend.slice(0,6));
    e.currentTarget.classList.add('active');

  }

  const showDataProjects = (e) => {
    const tabs = document.querySelectorAll('.portfolio-filter-item')
    tabs.forEach(tab =>{
      tab.classList.remove('active');
    })
    const data_p= portfolioData.filter(project => project.category === "data")
    setData(data_p.slice(0,6));
    e.currentTarget.classList.add('active');

  }

   
  const expandData = () => {
    const filt = document.querySelector('.portfolio-filter').children;
    
    for (let j = 0; j < filt.length; j++){

      if (filt[j].classList.value === "portfolio-filter-item active") {
        if ( j === 0) {
          setData(portfolioData)
        }
        if ( j === 1) {
          const data_p= portfolioData.filter(project => project.category === "data")
          setData(data_p);
        }
        if ( j === 2) {
          const frontend = portfolioData.filter(project => project.category === "frontend")
          setData(frontend);
        }
      }
    }

    setExpansion(true)
  }

  const collapseData = () => {
    const filt = document.querySelector('.portfolio-filter').children;
    
    for (let j = 0; j < filt.length; j++){

      if (filt[j].classList.value === "portfolio-filter-item active") {
        if ( j === 0) {
          setData(portfolioData.slice(0,6))
        }
        if ( j === 1) {
          const data_p= portfolioData.filter(project => project.category === "data")
          setData(data_p.slice(0,6));
        }
        if ( j === 2) {
          const frontend = portfolioData.filter(project => project.category === "frontend")
          setData(frontend.slice(0,6));
        }
      }
    }

    setExpansion(false)
  }
  
  const scrollToSection = (e) => {
    let id = e.currentTarget.attributes.name.value;
    document.getElementById(id).scrollIntoView()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const  dynamicNavbar = () => {
      if (scrollPosition > 56) {
        setNavStatus(true)
      }
      else {
        setNavStatus(false)
      }
    }
    dynamicNavbar()
  }, [scrollPosition])


  return (
    <AppContext.Provider
      value={{
        navStatus,
        data,
        showFrontendProjects,
        showAllProjects,
        showDataProjects,
        expandData,
        collapseData,
        expansion,
        scrollToSection

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };