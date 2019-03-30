const db = require('../database');
const Sequelize = require('sequelize');

const { STRING, INTEGER, DECIMAL, DATE, TEXT, FLOAT } = Sequelize;

const Report = db.define(
  'reports',
  {
    timestamp_utc: {
      type: TEXT,
      allowNull: true,
    },
    timestamp_local: {
      type: TEXT,
      allowNull: true,
    },
    etautc: {
      type: TEXT,
      allowNull: true,
    },
    eta_local: {
      type: TEXT,
      allowNull: true,
    },
    state: {
      type: TEXT,
      allowNull: true,
    },
    event: {
      type: TEXT,
      allowNull: true,
    },
    captain: {
      type: TEXT,
      allowNull: true,
    },
    chiefengineer: {
      type: TEXT,
      allowNull: true,
    },
    latitude: {
      type: TEXT,
      allowNull: true,
    },
    longitude: {
      type: STRING,
      allowNull: true,
    },
    period: {
      type: DECIMAL,
      allowNull: true,
    },
    sailing_time: {
      type: FLOAT,
      allowNull: true,
    },
    total_running_hours_me: {
      type: FLOAT,
      allowNull: true,
    },
    heading: {
      type: TEXT,
      allowNull: true,
    },
    course_made_good: {
      type: TEXT,
      allowNull: true,
    },
    speed_over_ground: {
      type: TEXT,
      allowNull: true,
    },
    speed_through_water: {
      type: TEXT,
      allowNull: true,
    },
    distance_over_ground: {
      type: TEXT,
      allowNull: true,
    },
    distance_through_water: {
      type: TEXT,
      allowNull: true,
    },
    water_depth: {
      type: TEXT,
      allowNull: true,
    },
    water_depth_below_keel: {
      type: TEXT,
      allowNull: true,
    },
    draft_forward: {
      type: TEXT,
      allowNull: true,
    },
    draft_aft: {
      type: FLOAT,
      allowNull: true,
    },
    mean_draft: {
      type: FLOAT,
      allowNull: true,
    },
    trim: {
      type: FLOAT,
      allowNull: true,
    },
    air_temp: {
      type: TEXT,
      allowNull: true,
    },
    air_temp_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    engine_room_temp: {
      type: TEXT,
      allowNull: true,
    },
    cooling_water_temp_lt: {
      type: TEXT,
      allowNull: true,
    },
    air_press: {
      type: TEXT,
      allowNull: true,
    },
    air_press_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    sea_water_temp: {
      type: TEXT,
      allowNull: true,
    },
    sea_water_temp_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    sea_state: {
      type: TEXT,
      allowNull: true,
    },
    douglas_sea_scale: {
      type: TEXT,
      allowNull: true,
    },
    wind_speed_true: {
      type: TEXT,
      allowNull: true,
    },
    wind_speed_true_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    wind_speed_rel: {
      type: TEXT,
      allowNull: true,
    },
    wind_direction_true: {
      type: TEXT,
      allowNull: true,
    },
    wind_direction_true_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    wind_direction_rel: {
      type: TEXT,
      allowNull: true,
    },
    wave_height: {
      type: TEXT,
      allowNull: true,
    },
    wave_height_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    wave_direction: {
      type: TEXT,
      allowNull: true,
    },
    swell_height: {
      type: TEXT,
      allowNull: true,
    },
    swell_height_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    swell_direction: {
      type: TEXT,
      allowNull: true,
    },
    swell_direction_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    swell_period_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    visibility_weather_provider: {
      type: TEXT,
      allowNull: true,
    },
    cargo_weight: {
      type: TEXT,
      allowNull: true,
    },
    cargo_te_ufull: {
      type: INTEGER,
      allowNull: true,
    },
    cargo_te_uempty: {
      type: INTEGER,
      allowNull: true,
    },
    cargo_reefers: {
      type: INTEGER,
      allowNull: true,
    },
    cargo_volume: {
      type: TEXT,
      allowNull: true,
    },
    cargo_passengers: {
      type: TEXT,
      allowNull: true,
    },
    ballast_weight: {
      type: TEXT,
      allowNull: true,
    },
    avg_shaft_rpm: {
      type: TEXT,
      allowNull: true,
    },
    avg_slip: {
      type: TEXT,
      allowNull: true,
    },
    total_foc: {
      type: TEXT,
      allowNull: true,
    },
    total_fociso: {
      type: TEXT,
      allowNull: true,
    },
    total_focme: {
      type: TEXT,
      allowNull: true,
    },
    total_focmeiso: {
      type: TEXT,
      allowNull: true,
    },
    total_focae: {
      type: TEXT,
      allowNull: true,
    },
    total_focaeiso: {
      type: TEXT,
      allowNull: true,
    },
    total_focab: {
      type: TEXT,
      allowNull: true,
    },
    total_focabiso: {
      type: TEXT,
      allowNull: true,
    },
    total_focigs: {
      type: TEXT,
      allowNull: true,
    },
    total_focigsiso: {
      type: TEXT,
      allowNull: true,
    },
    total_focinc: {
      type: TEXT,
      allowNull: true,
    },
    total_focinciso: {
      type: TEXT,
      allowNull: true,
    },
    total_fochfo: {
      type: TEXT,
      allowNull: true,
    },
    total_fochfohs: {
      type: FLOAT,
      allowNull: true,
    },
    total_fochfols: {
      type: FLOAT,
      allowNull: true,
    },
    total_fochfolls: {
      type: INTEGER,
      allowNull: true,
    },
    total_foclfo: {
      type: INTEGER,
      allowNull: true,
    },
    total_focmdo: {
      type: FLOAT,
      allowNull: true,
    },
    total_focmgo: {
      type: FLOAT,
      allowNull: true,
    },
    total_foc_propane: {
      type: FLOAT,
      allowNull: true,
    },
    total_foc_butane: {
      type: INTEGER,
      allowNull: true,
    },
    total_foclng: {
      type: INTEGER,
      allowNull: true,
    },
    total_foc_methanol: {
      type: INTEGER,
      allowNull: true,
    },
    total_foc_ethanol: {
      type: INTEGER,
      allowNull: true,
    },
    total_foc_undef: {
      type: INTEGER,
      allowNull: true,
    },
    total_sfocme: {
      type: TEXT,
      allowNull: true,
    },
    total_sfocae: {
      type: TEXT,
      allowNull: true,
    },
    total_sfocmeiso: {
      type: TEXT,
      allowNull: true,
    },
    total_sfocaeiso: {
      type: TEXT,
      allowNull: true,
    },
    total_c_o2: {
      type: FLOAT,
      allowNull: true,
    },
    total_c_o2_me: {
      type: FLOAT,
      allowNull: true,
    },
    total_c_o2_ae: {
      type: FLOAT,
      allowNull: true,
    },
    total_c_o2_ab: {
      type: FLOAT,
      allowNull: true,
    },
    total_c_o2_igs: {
      type: FLOAT,
      allowNull: true,
    },
    total_c_o2_inc: {
      type: INTEGER,
      allowNull: true,
    },
    total_c_o2_undef: {
      type: INTEGER,
      allowNull: true,
    },
    total_power_meavg: {
      type: TEXT,
      allowNull: true,
    },
    total_power_aeavg: {
      type: TEXT,
      allowNull: true,
    },
    total_generated_energy_me: {
      type: TEXT,
      allowNull: true,
    },
    total_generated_energy_ae: {
      type: INTEGER,
      allowNull: true,
    },
    total_generated_electrical_energy: {
      type: INTEGER,
      allowNull: true,
    },
    total_generated_shaft_energy: {
      type: TEXT,
      allowNull: true,
    },
    total_shaft_power_avg: {
      type: TEXT,
      allowNull: true,
    },
    total_shaft_power_corrected_avg: {
      type: TEXT,
      allowNull: true,
    },
    total_electrical_power_avg: {
      type: TEXT,
      allowNull: true,
    },
    me_load_avg: {
      type: TEXT,
      allowNull: true,
    },
    ae_load_avg: {
      type: TEXT,
      allowNull: true,
    },
    delivered_powercorrected: {
      type: TEXT,
      allowNull: true,
    },
    eeoi_weight: {
      type: TEXT,
      allowNull: true,
    },
    eeoiteu: {
      type: TEXT,
      allowNull: true,
    },
    power_added_or_reduced_bywind: {
      type: TEXT,
      allowNull: true,
    },
    speed_loss: {
      type: TEXT,
      allowNull: true,
    },
    speed_loss_uncorrected: {
      type: TEXT,
      allowNull: true,
    },
    total_fuel_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    total_fresh_water_rob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hforob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfohsrob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfolsrob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfollsrob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lforob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mdorob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mgorob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_propane_rob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_butane_rob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lngrob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_methanol_rob: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_ethanol_rob: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_merob: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_aerob: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_undef_rob: {
      type: TEXT,
      allowNull: true,
    },
    total_circulation_lub_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_lub_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_hs_lub_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_ls_lub_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    undefined_lub_oil_rob: {
      type: TEXT,
      allowNull: true,
    },
    fresh_water_drinking_rob: {
      type: TEXT,
      allowNull: true,
    },
    fresh_water_boiler_rob: {
      type: TEXT,
      allowNull: true,
    },
    fresh_water_undefined_rob: {
      type: TEXT,
      allowNull: true,
    },
    total_fuel_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfo_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfohs_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfols_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfolls_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lfo_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mdo_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mgo_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_propane_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_butane_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lng_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_methanol_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_ethanol_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_me_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_ae_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_undef_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    total_circulation_lub_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_lub_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_hs_lub_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_ls_lub_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    undefined_lub_oil_bunkered: {
      type: TEXT,
      allowNull: true,
    },
    total_fuel_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfo_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfohs_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfols_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_hfolls_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lfo_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mdo_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_mgo_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_propane_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_butane_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_lng_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_methanol_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    fuel_oil_ethanol_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_me_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_ae_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    circulation_lub_oil_undef_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    total_circulation_lub_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_lub_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_hs_lub_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    cylinder_ls_lub_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    undefined_lub_oil_gain_loss: {
      type: TEXT,
      allowNull: true,
    },
    total_cylinder_lub_oil_consumption: {
      type: TEXT,
      allowNull: true,
    },
    total_cylinder_hs_lub_oil_consumption: {
      type: TEXT,
      allowNull: true,
    },
    total_cylinder_ls_lub_oil_consumption: {
      type: TEXT,
      allowNull: true,
    },
    total_circulation_lub_oil_consumption_me: {
      type: TEXT,
      allowNull: true,
    },
    total_circulation_lub_oil_consumption_ae: {
      type: TEXT,
      allowNull: true,
    },
    total_fresh_water_consumption_undefined: {
      type: TEXT,
      allowNull: true,
    },
    total_fresh_water_consumption_domestic: {
      type: TEXT,
      allowNull: true,
    },
    total_fresh_water_consumption_boiler: {
      type: TEXT,
      allowNull: true,
    },
    total_fresh_water_consumption_washing: {
      type: TEXT,
      allowNull: true,
    },
    total_oily_water_discharge_undefined: {
      type: TEXT,
      allowNull: true,
    },
    total_oily_water_discharge_via_ows: {
      type: TEXT,
      allowNull: true,
    },
    total_oily_water_discharge_via_odme: {
      type: TEXT,
      allowNull: true,
    },
    estimation_score: {
      type: TEXT,
      allowNull: true,
    },
    completeness_score: {
      type: FLOAT,
      allowNull: true,
    },
    plausibility_score: {
      type: FLOAT,
      allowNull: true,
    },
    field_194: {
      type: TEXT,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = Report;
