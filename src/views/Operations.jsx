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
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import { weatherChart, cargoChart } from 'variables/charts.jsx';

import ResponsiveEmbed from 'react-responsive-embed';

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      scriptLoaded: false,
      activeTab: 1
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
          <Row>
            <Col lg="14">
              <Card>
                <CardHeader>
                  <h5 className="card-category">General Cargo Lineup</h5>
                </CardHeader>
                <CardBody>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classNames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        AT BERTH
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classNames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        AT ANCHORAGE
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Vessel</th>
                              <th>Berth No.</th>
                              <th>Arrived</th>
                              <th>Berthed</th>
                              <th>Cargo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>ARVIKA</td>
                              <td>VPDSA - 13</td>
                              <td>3/5/2019</td>
                              <td>3/6/2019</td>
                              <td>UREA</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>VITA HARMONY</td>
                              <td>PDSA - 14</td>
                              <td>3/27/2019</td>
                              <td>3/27/2019</td>
                              <td>UREA IN BULK</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>JUIST</td>
                              <td>PDSA - 15</td>
                              <td>3/21/2019</td>
                              <td>3/22/2019</td>
                              <td>Supplies & AVPD Change</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                          <Table >
                            <thead>
                            <tr>
                              <th>#</th>
                              <th>Vessel</th>
                              <th>Berth No.</th>
                              <th>Arrived</th>
                              <th>ETB</th>
                              <th>Cargo</th>
                            </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>BISCAYNE LIGHT</td>
                                <td>DMP</td>
                                <td>1/28/2019</td>
                                <td>3/21/2019</td>
                                <td>PRIME STEEL BILLET</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>EPIC TRADER</td>
                                <td>DMP</td>
                                <td>3/28/2019</td>
                                <td>2/12/2019</td>
                                <td>FERTILIZER</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>OSIRIS</td>
                                <td>DMP</td>
                                <td>3/28/2019</td>
                                <td>TBC</td>
                                <td>FERTILIZER IN BULK</td>
                              </tr>
                            </tbody>
                          </Table>
                        <Col sm="6">
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
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
