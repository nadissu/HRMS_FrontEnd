import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobPositionList from "../pages/JobPositionList";



export default function Section() {
  return (
    <div>
      <Grid>        

        <Grid.Row>
          <GridColumn size={15}>
            <JobPositionList/>
          </GridColumn>
        </Grid.Row>

      
      </Grid>
    </div>
  ); 

  }