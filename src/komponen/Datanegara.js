// import react dan tabel
import React from 'react';
import MaterialTable from 'material-table';

// class based componen
class Datanegara extends React.Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }

    state = {
        loading:false,
        stats: [],
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then(response => response.json())
        .then(res => {
        this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
        console.log(error)
        })
    }

    render() {
        return (
             <React.Fragment> 
                <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
                     title="Data Kasus Covid-19 Negara"
 
                     columns={[
                        { title: 'Negara', field :'country'},
                        { title: 'Total Kasus', field :'cases'},
                        { title: 'Kasus Hari ini', field :'todayCases'},
                        { title: 'Total Meninggal',field :'deaths' },
                        { title: 'Meninggal Hari ini', field :'todayDeaths' },
                        { title: 'Total Sembuh', field :'recovered' },
                        { title: 'Kasus Aktif', field :'active' },
                        { title: 'Kasus Kritis', field :'critical' },
                        { title: 'Kasus/Juta', field :'casesPerOneMillion' },
                     ]}

                    data={this.state.stats}

                    actions={[
                        {
                            icon: 'refresh',
                            tooltip: 'Refresh',
                            isFreeAction: true,
                            onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
                            },
                        ]}
                    options={{
                        headerStyle: {
                        backgroundColor: '#3f51b5',
                        color: '#FFFF'
                        }}
                    }
                />
             </React.Fragment>
              
                 
                     
              
            
             
             );
     }
   
}

export default Datanegara;