import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

// core components
import { weatherChart, cargoChart } from 'variables/charts.jsx';

import ResponsiveEmbed from 'react-responsive-embed';

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: 'data1',
      scriptLoaded: false,
    };
  }

  setBgChartData = name => {
    this.setState({
      bigChartData: name,
    });
  };

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Weather Conditions</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={weatherChart[this.state.bigChartData]}
                      options={weatherChart.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Marine Traffic</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <ResponsiveEmbed
                      src="https://www.marinetraffic.com/"
                      allowFullScreen
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Cargo Weight</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-app text-info" /> 23,360
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={cargoChart.data}
                      options={cargoChart.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="8">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Vessel Name</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-map-big text-info" /> Vessel
                    Status
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Timestamp</th>
                        <th>State</th>
                        <th>Last Event</th>
                        <th>ETA</th>
                        <th>Sailing Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>18.03.2019 12:00</td>
                        <td>At Sea</td>
                        <td>Noon Report</td>
                        <td>19.03.2019 02:00</td>
                        <td>13.5 Hours</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Heading</th>
                        <th>Speed</th>
                        <th>Draft</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>9.96</td>
                        <td>-77.97</td>
                        <td>262</td>
                        <td>10.9 Kts</td>
                        <td>9.97</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Operations;
