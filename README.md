
# Atlanta, GA Crime Analysis
	
This project visualizes crime rates for Atlanta, GA in 2021. Crime rates and type have a direct correlation to property value and the amount of resources available to the community. According to neighborhoods  the average for violent crimes is much higher than other cities in Georgia and outside of Georgia with similar population sizes. Atlanta police department provides yearly reports for crime including  type, location, time of day and other measurements.


## Delivering Data

Jupyter notebook was used to run Python script in order to clean the dataset. Columns were renamed, the index was reset, and null values were dropped using the script found in the “crime_notebook.ipynb.” Seven different columns were deleted based on the data needed to visualize the crime rate.

##### Deleting Columns
del crime_data['ibr_code']

##### Renaming Columns
cleaned_crime.rename(columns={'UC2_Literal':'crime_type'})


After cleaning the data and creating the dataframe, it was exported to the atl_crime_db PostgresSQL database. 


## Delivering Data

Create engine to connect to database in PGadmin
engine = create_engine(f'postgresql://postgres:{password}@localhost:5432/atl_crime_db')

Create the database if it does not already exist
if not database_exists(engine.url):
    create_database(engine.url)

Send the cleaned_crime_df to the atl_crime_db databse in PGadmin
cleaned_crime_df.to_sql('atl_crime2021', con=engine, if_exists = 'append', index = False)


## Visualizing Data

A dashboard with four different visuals were created using HTML, CSS, and  JavaScript libraries. The map and stacked bar chart were created using the library Plot.ly and consist of two different views. The bar charts and pie were created using the library Chart.js. 

Below you will find the links to getting started with the different JavaScript libraries. 

##### Chart.js link
https://www.chartjs.org/docs/latest/getting-started/


##### Plotly link
https://plotly.com/javascript/getting-started/



### References 
https://www.neighborhoodscout.com/ga/atlanta/crime#description
https://www.atlantapd.org/i-want-to/crime-data-downloads
