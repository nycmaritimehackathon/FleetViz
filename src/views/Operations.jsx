import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

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
import { weatherChart } from 'variables/charts.jsx';

import ResponsiveEmbed from 'react-responsive-embed'
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
                      <CardTitle tag="h2">Weather</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data1',
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData('data1')}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Douglas Sea State
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data2',
                          })}
                          onClick={() => this.setBgChartData('data2')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Wind Speed
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                      </ButtonGroup>
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
          <ResponsiveEmbed src='https://www.marinetraffic.com/' allowFullScreen />

        </div>
      </>
    );
  }
}

export default Operations;
