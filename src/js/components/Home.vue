<template>
    <div>
        <Cover />

        <hr>

        <h3 id="contents">Contents</h3>

        <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#propellant-choice-and-properties">Propellant Choice and Properties</a></li>
            <li>
                <a href="#design-equations">Design Equations</a>
                <ol>
                    <li><a href="#nozzle">Nozzle</a></li>
                    <li><a href="#combustion-chamber">Combustion Chamber</a></li>
                    <li><a href="#chamber-wall-thickness">Chamber Wall Thickness</a></li>
                    <li><a href="#engine-cooling">Engine Cooling</a></li>
                    <li><a href="#heat-transfer">Heat Transfer</a></li>
                    <li><a href="#materials">Materials</a></li>
                    <li><a href="#injectors">Injectors</a></li>
                </ol>
            </li>
            <li><a href="#example-design-calculation">Example Design Calculation</a>
                <ol>
                    <li><a href="#example">Example</a></li>
                    <li><a href="#design">Design</a></li>
                </ol>
            </li>
            <li><a href="#fabrication">Fabrication</a></li>
            <li><a href="#testing-equipment">Testing Equipment</a>
                <ol>
                    <li><a href="#feed-system">Feed System</a></li>
                    <li><a href="#feed-system-components">Feed System Components</a></li>
                </ol>
            </li>
            <li><a href="#test-stand">Test Stand</a></li>
            <li><a href="#safety">Safety</a></li>
            <li><a href="#engine-check-out-and-calibration">Engine Check-Out and Calibration</a></li>
            <li><a href="#ignition-and-operation">Ignition and Operation</a></li>
            <li><a href="#the-law">The Law</a></li>
            <li><a href="#bibliography">Bibliography</a></li>
            <li><a href="#list-of-suppliers">List of Suppliers</a></li>
            <li> <a href="#conversion-factors">Conversion Factors</a></li>

            <li><a href="#additions">Additions</a>
                <ol>
                    <li><a href="#additions-and-corrections">Additions and Corrections</a></li>
                    <li><a href="#other-notes">Other Notes</a></li>
                </ol>
            </li>
        </ol>



        <div class="content">
            
            <!-- CH 1.0 -->
            <h1 id="introduction">Introduction</h1>

            <h2>Notice</h2>
            
            <p>ROCKETLAB cannot assume responsibility, in any manner whatsoever, for the use
            readers make of the information presented herein or the devices resulting
            therefrom.</p>

            <h2>Foreword</h2>
            
            <p>The rocket engine is a relatively simple device in which propellants are burned
            and the resulting high pressure gases are expanded through a specially shaped nozzle
            to produce thrust. Gas pressurized propellant tanks and simple propellant flow
            controls make operation of a small liquid-fuel rocket engine about as simple as
            operating an automobile engine. Why then do so many amateur rocket engines fail or
            cause injury? The reason, usually and simply, is that the amateur is not accustomed
            to high pressure devices operating near material temperature limits. His normal
            everyday life is, instead, filled with devices and gadgets operating at low
            pressures and at low thermal energy levels. With proper design, careful workmanship,
            and good test equipment, operated in a safe manner, the amateur can build small,
            liquid-fuel rocket engines which will have hours of safe operating life.</p>

            <p>The purpose of this publication is to provide the serious amateur builder with
            design information, fabrication procedures, test equipment requirements, and safe
            operating procedures for small liquid-fuel rocket engines.</p>

            <h2>Introduction</h2>

            <p>A liquid rocket engine employs liquid propellants which are fed under pressure
            from tanks in to a combustion chamber. The propellants usually consist of a liquid
            oxidizer and a liquid fuel. In the combustion chamber the propellants chemically
            react (burn) to form hot gases which are then accelerated and ejected at high
            velocity through a nozzle, thereby imparting momentum to the engine. Momentum is the
            product of mass and velocity. The thrust force of a rocket motor is the reaction
            experienced by the motor structure due to the ejection of the high velocity matter.
            This is the same phenomenon which pushes a garden hose backward as water squirts
            from the nozzle or makes a gun recoil when fired.</p>

            <Figure name="Figure 1" src="img/fig-1.svg" caption="Typical rocket motor" />

            <!--<div id="figure-1" class="fig">
                <div class="img">
                    <a href="img/fig-1.svg" target="_blank"><img src="img/fig-1.svg" alt="figure-1" style="max-width: 510px;" /></a>
                </div>
                <span class="caption"><span class="fig-text">Figure 1</span> Typical Rocket Motor</span>
            </div>-->

            <p>A typical rocket motor consists of the combustion chamber, the nozzle, and the
            injector, as shown in <a class="figure-link" href="#figure-1">Figure 1</a>. The
            combustion chamber is where the burning of propellants takes place at high pressure.
            The chamber must be strong enough to contain the high pressure generated by, and the
            high temperature resulting from, the combustion process. Because of the high
            temperature and heat transfer, the chamber and nozzle are usually cooled. The
            chamber must also be of sufficient length to ensure complete combustion before the
            gases enter the nozzle.</p>

            <Figure name="Figure 2" src="img/fig-2.svg" caption="DeLaval Nozzle" />

            <p>The function of the nozzle is to convert the chemical-thermal energy generated
            in the combustion chamber into kinetic energy, The nozzle converts the slow moving,
            high pressure, high temperature gas in the combustion chamber into high velocity gas
            of lower pressure and temperature. Since thrust is the product of mass (the amount
            of gas flowing through the nozzle) and velocity, a very high gas velocity is
            desirable. Gas velocities from <span v-if="unitSystem=='US'">one to two miles per second (5000 to 12000 feet per
            second)</span><span v-else>1.5 to 3.7 kilometers per second</span> can be obtained in rocket nozzles. Nozzles which perform this seemingly
            amazing feat are called DeLaval nozzles (after their inventor) and consist of a
            convergent and divergent section, as shown in
            <a class="figure-link" href="#figure-2">Figure 2</a>. The minimum flow area
            between the convergent and divergent section is called the nozzle throat. The flow
            area at the end of the divergent section is called the nozzle exit area. The nozzle
            is usually made long enough (or the exit area is great enough) such that the
            pressure in the combustion chamber is reduced at the nozzle exit to the pressure
            existing outside the nozzle. If the rocket engine is being fired at sea level this
            pressure is about

            <span v-if="unitSystem=='US'">14.7 pounds per square inch (psi). If the engine is designed for
            operation at high altitude, the exit pressure is less than 14.7 psi. The drop in
            temperature of the combustion gases flowing through the nozzle is high and can be as
            much as 2000-3000 °F. Since the gases in the combustion chamber may be at
            5000-6000 °F, the gas temperature at the nozzle exit is still about 3000 °F.
            </span>
            <span v-else>
            101.3 kilopascals (kPa). If the engine is designed for
            operation at high altitude, the exit pressure is less than 101.3 kPa. The drop in
            temperature of the combustion gases flowing through the nozzle is high and can be as
            much as 1100-1600 °C. Since the gases in the combustion chamber may be at
            2700-3200 °C, the gas temperature at the nozzle exit is still about 1600 °C.
            </span></p>

            <!-- CH 2.0 -->
            <h1 id="propellant-choice-and-properties">Propellant Choice and Properties</h1>

            <!-- CH 2.1 -->
            <h2 id="propellant-choice">Propellant Choice</h2>

            <p>Liquid rocket engines can burn a variety of oxidizer - fuel combinations, some of
            which are tabulated in <a class="table-link" href="#table-1">Table I</a>. Most of
            the propellant combinations listed are dangerous, toxic, and expensive. The amateur
            builder of rocket engines on the other hand, requires propellants that are readily
            available, reasonably safe and easy to handle, and inexpensive. Based on experience,
            ROCKETLAB recommends the use of gaseous oxygen as the oxidizer and a hydrocarbon
            liquid as the fuel. They give good performance, the combustion flame is readily
            visible, and their high combustion temperature presents an adequate design challenge
            to the amateur builder. The propellants are used in the Atlas missile and the Saturn
            space booster [see <a href="#additions-and-corrections">Additions and Corrections</a>].
            In these systems, however, liquid rather than gaseous oxygen is used
            as the oxidizer.</p>

            <h4>TABLE I</h4>

            <!-- TABLE 1 -->
            <div id="table-1" class="responsive-table">
                <table v-if="unitSystem=='US'" class="table full-width">
                    <thead>
                        <tr>
                            <th>Propellant Combination Oxidizer/Fuel</th>
                            <th>Combustion Pressure, psi</th>
                            <th>Mixture Ratio</th>
                            <th>Flame Temp (°F)</th>
                            <th>I<sub>sp</sub>, sec</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Liquid Oxygen & gasoline</td>
                            <td>300</td>
                            <td>2.5</td>
                            <td>5470</td>
                            <td>242</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & gasoline</td>
                            <td>300</td>
                            <td>2.5</td>
                            <td>5742</td>
                            <td>261</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & gasoline</td>
                            <td>500</td>
                            <td>2.5</td>
                            <td>5862</td>
                            <td>279</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & JP-4 (jet fuel)</td>
                            <td>500</td>
                            <td>2.2</td>
                            <td>5880</td>
                            <td>255</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & methyl alcohol</td>
                            <td>300</td>
                            <td>1.25</td>
                            <td>5180</td>
                            <td>238</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & methyl alcohol</td>
                            <td>300</td>
                            <td>1.2</td>
                            <td>5220</td>
                            <td>248</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & hydrogen</td>
                            <td>500</td>
                            <td>3.5</td>
                            <td>4500</td>
                            <td>363</td>
                        </tr>
                        <tr>
                            <td>Red fuming nitric acid & JP-4</td>
                            <td>500</td>
                            <td>4.1</td>
                            <td>5150</td>
                            <td>238</td>
                        </tr>
                    </tbody>
                </table>

                <table v-else class="table full-width">
                    <thead>
                        <tr>
                            <th>Propellant Combination Oxidizer/Fuel</th>
                            <th>Combustion Pressure, MPa</th>
                            <th>Mixture Ratio</th>
                            <th>Flame Temp (°C)</th>
                            <th>I<sub>sp</sub>, sec</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Liquid Oxygen & gasoline</td>
                            <td>2.068</td>
                            <td>2.5</td>
                            <td>3020</td>
                            <td>242</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & gasoline</td>
                            <td>2.068</td>
                            <td>2.5</td>
                            <td>3170</td>
                            <td>261</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & gasoline</td>
                            <td>3.450</td>
                            <td>2.5</td>
                            <td>3240</td>
                            <td>279</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & JP-4 (jet fuel)</td>
                            <td>3.450</td>
                            <td>2.2</td>
                            <td>3250</td>
                            <td>255</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & methyl alcohol</td>
                            <td>2.068</td>
                            <td>1.25</td>
                            <td>2860</td>
                            <td>238</td>
                        </tr>
                        <tr>
                            <td>Gaseous Oxygen & methyl alcohol</td>
                            <td>2.068</td>
                            <td>1.2</td>
                            <td>2880</td>
                            <td>248</td>
                        </tr>
                        <tr>
                            <td>Liquid Oxygen & hydrogen</td>
                            <td>3.450</td>
                            <td>3.5</td>
                            <td>2480</td>
                            <td>363</td>
                        </tr>
                        <tr>
                            <td>Red fuming nitric acid & JP-4</td>
                            <td>3.450</td>
                            <td>4.1</td>
                            <td>2840</td>
                            <td>238</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>Gaseous oxygen can be readily and inexpensively obtained in pressurized cylinders
            in almost any community because of its use in oxy-acetylene welding. With reasonable
            precautions, to be detailed later, the gas (and cylinder) is safe to handle for
            rocket test stand use. Gas pressures are easily regulated with commercial regulators
            and gas flow rate is easily controlled with commercially available valves.</p>

            <p>Hydrocarbon fuels, such as gasoline and alcohol, are readily available in any
            community. Safety precautions are already known by most responsible individuals due
            to wide use of the fuels in internal combustion engines for automobiles and power
            equipment.</p>

            <p>All subsequent sections of this publication will refer to, and assume, that the
            propellants to be used in amateur liquid-fuel rocket engines are gaseous oxygen and
            hydrocarbon fuel.</p>

            <p>The flame temperature of hydrocarbon fuels burned in gaseous oxygen at various
            combustion chamber pressures is shown in <a class="figure-link" href="#figure-3">Figure 3</a>
            for the stoichiometric mixture ratio. Mixture ratio is defined as the weight flow of
            oxidizer divided by the weight flow of fuel, or</p>

            <!-- O/F = W<sub>o</sub>/W<sub>f</sub>      (1)<br /> -->
            <Equation name="of_ratio" label="1" />

            <p class="formula-explanation">
                where<br />
                <span v-katex="'\\dot{w_o}'"></span> = <span v-if="unitSystem == 'US'">lb of oxygen/sec</span><span v-else>kg of oxygen/sec</span><br />
                <span v-katex="'\\dot{w_f}'"></span> = <span v-if="unitSystem == 'US'">lb of fuel/sec</span><span v-else>kg of fuel/sec</span><br />
            </p>

            <p>When a stoichiometric ratio is achieved just enough oxygen is present to
            chemically react with all the fuel; the highest flame temperature is achieved under
            these conditions. If a lower flame temperature is desired it is usually better to
            have more fuel present than oxidizer; this is known as burning "off-ratio" or
            "fuel-rich." This condition is less severe on the rocket engine than burning, at
            stoichiometric or oxygen-rich conditions.</p>

            <p><a class="figure-link" href="#figure-4">Figure 4</a> indicates how the flame
            temperature varies when combustion chamber pressure is held at a constant value and
            the mixture ratio is allowed to vary.</p>

            <Figure name="Figure 3"
                v-bind:src="`img/fig-3-${unitSystem.toLowerCase()}.svg`"
                caption="Flame temperature versus chamber pressure at stoichiometric mixture ratio."
                :max-width="620"
            />

            <Figure name="Figure 4"
                v-bind:src="`img/fig-4-${unitSystem.toLowerCase()}.svg`"
                caption="Flame temperature versus mixture ratio at constant chamber pressure."
                :max-width="620"
            />


            <p>The thrust developed per <span v-if="unitSystem=='US'">pound</span><span v-else>weight unit (newton)</span> of total propellant burned per second is known as
            specific impulse and is defined as</p>

            <!-- I<sub>sp</sub> = thrust/total propellant flow rate     (2)<br /> -->
            <Equation name="isp" label="2" />

            <p><a class="figure-link" href="#figure-5">Figure 5</a>
            indicates the maximum performance possible from hydrocarbon fuels burned
            with gaseous oxygen at various chamber pressures with the gas expanded to
            atmospheric pressure. This graph can be used to determine the propellant flow rate
            required to produce a certain thrust. Suppose you wish to design a rocket engine
            using gaseous oxygen/gasoline propellants to be burned at a chamber pressure of <span v-if="unitSystem=='US'">200
            psi with a thrust of 100 lbs. At these conditions the propellant performance, from
            <a class="figure-link" href="#figure-5">Figure 5</a>, is 244 lb of thrust per lb of
            propellant burned per second. Therefore
            </span>
            <span v-else>1.4 MPa with a thrust of 445 N. At these conditions the propellant performance, from
            <a class="figure-link" href="#figure-5">Figure 5</a>, is 244 N of thrust per kg of propellant burned per second. Therefore
            </span></p>

            <!-- W<sub>t</sub> = F/I<sub>sp</sub> = 100/244 = 0.41 lb/sec   (3) -->
            <Equation name="w_t" label="3" :units="unitSystem" />
            <span v-if="unitSystem=='SI'"><Equation name="m_t" /></span>

            <Figure name="Figure 5"
                v-bind:src="`img/fig-5-${unitSystem.toLowerCase()}.svg`"
                :max-width="620"
            >I<sub>sp</sub> performance of hydrocarbon fuels with gaseous oxygen.</Figure>
            
            <p>Since the maximum <i>I<sub>sp</sub></i> mixture ratio (<i>r</i>) for oxygen/gasoline is
            2.5, we have:</p>

            <span v-if="unitSystem=='US'">
                <Equation name="w_o" label="4" />
                <Equation name="w_f" label="5" />
                <Equation name="w_t2" label="6" />
            </span>
            <span v-else>
                <Equation name="m_o" label="4" />
                <Equation name="m_f" label="5" />
                <Equation name="m_t2" label="6" />
            </span>

            <p>[see <a href="#additions-and-corrections">Additions and Corrections</a>]</p>

            <!-- CH 2.2 -->
            <h2 id="propellant-properties">Propellant Properties</h2>
            
            <p>The chemical and physical properties of gaseous oxygen, methyl alcohol, and
            gasoline are given in <a class="table-link" href="#table-2">Table II</a>.</p>

            <h4>Table II</h4>
            
            <!-- TABLE 2 -->
            <div id="table-2" class="responsive-table">
                <table class="table full-width">
                    <thead>
                        <tr>
                            <th>Propellant</th>
                            <th>Gaseous Oxygen</th>
                            <th>Methyl Alcohol</th>
                            <th>Gasoline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chemical Formula</td>
                            <td>O<sub>2</sub></td>
                            <td>CH<sub>3</sub>OH</td>
                            <td>C<sub>8</sub>H<sub>18</sub></td>
                        </tr>
                        <tr>
                            <td>Molecular Weight</td>
                            <td>32 u</td>
                            <td>34.04 u</td>
                            <td>114 u</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>colorless</td>
                            <td>colorless</td>
                            <td>colorless</td>
                        </tr>
                        <tr>
                            <td>Effect on metals</td>
                            <td>none</td>
                            <td>none</td>
                            <td>none</td>
                        </tr>
                        <tr>
                            <td>Fire hazard</td>
                            <td>high</td>
                            <td>high</td>
                            <td>high</td>
                        </tr>
                        <tr>
                            <td>Toxicity</td>
                            <td>none</td>
                            <td>toxic</td>
                            <td>mild</td>
                        </tr>
                        <tr v-if="unitSystem == 'US'">
                            <td>Density</td>
                            <td>0.083 lb/ft<sup>3</sup></td>
                            <td>48 lb/ft<sup>3</sup></td>
                            <td>44.5 lb/ft<sup>3</sup></td>
                        </tr>
                        <tr v-else>
                            <td>Density</td>
                            <td>1.330 kg/m<sup>3</sup></td>
                            <td>769 kg/m<sup>3</sup></td>
                            <td>713 kg/m<sup>3</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <span v-if="unitSystem=='US'">
                <p><i><strong>Note:</strong> The density of gaseous oxygen at conditions other than
                standard can be determined from</i><br />
                <i>ρ<sub>2</sub></i> = <i>ρ<sub>1</sub></i> (<i>P<sub>2</sub></i>/<i>P<sub>1</sub></i>)(<i>T<sub>1</sub></i>/<i>T<sub>2</sub></i>),
                <i>where</i> <i>P<sub>1</sub></i> = 14.7 psi, <i>T<sub>1</sub></i> = 68 °F, <i>ρ<sub>1</sub></i> = 0.083 lb/ft<sup>3</sup>.</p>
            </span>
            <span v-else>
                <p><i><strong>Note:</strong> The density of gaseous oxygen at conditions other than
                standard can be determined from</i><br />
                <i>ρ<sub>2</sub></i> = <i>ρ<sub>1</sub></i> (<i>P<sub>2</sub></i>/<i>P<sub>1</sub></i>)(<i>T<sub>1</sub></i>/<i>T<sub>2</sub></i>),
                <i>where</i> <i>P<sub>1</sub></i> = 101.3 kPa, <i>T<sub>1</sub></i> = 20 °C, <i>ρ<sub>1</sub></i> = 1.330 kg/m<sup>3</sup>.</p>
            </span>

            <!-- CH 3.0 -->
            <h1 id="design-equations">Design equations</h1>

            <p>The following section will detail simplified equations for the design of small
            liquid-fuel rocket motors. The nomenclature for the motor design is shown in
            <a class="figure-link" href="#figure-6">Figure 6</a>.</p>

            <Figure name="Figure 6" src="img/fig-6.svg" caption="Motor Design Configuration" />

            <!-- CH 3.1 -->
            <h2 id="nozzle">Nozzle</h2>
            
            <p>The nozzle throat cross-sectional area may be computed if the total propellant
            flow rate is known and the propellants and operating conditions have been chosen.
            Assuming perfect gas law theory:</p>

            <!-- At = Wt/Pt SQRT(R Tt/(gamma)g_c)   (7) -->
            <Equation name="A_t" label="7" :units="unitSystem" />

            <p class="formula-explanation">
                <span v-if="unitSystem=='US'">
                    where <i>R</i> = gas constant, given by <i>R</i> = <i>R<sup>*</sup></i>/<i>M</i>. <i>R<sup>*</sup></i> is the universal gas
                    constant equal to 1545.32 ft-lb/lb°R, and <i>M</i> is the molecular weight of the gas.
                    The molecular weight of the hot gaseous products of combustion of gaseous
                    oxygen/hydrocarbon fuel is about 24, so that <i>R</i> is about 65 ft-lb/lb°R.
                </span>
                <span v-else>
                    where <i>R</i> = gas constant, given by <i>R</i> = <i>R<sup>*</sup></i>/<i>M</i>. <i>R<sup>*</sup></i> is the universal gas
                    constant equal to 8.31446 J/(mol &#183; K), and <i>M</i> is the molecular weight of the gas.
                    The molecular weight of the hot gaseous products of combustion of gaseous
                    oxygen/hydrocarbon fuel is about 24, so that <i>R</i> is about 350 J/(kg &#183; K).
                </span>
            </p>

            <p>Gamma, (𝛾), is the ratio of gas specific heats and is a thermodynamic variable
            which the reader is encouraged to read about elsewhere
            (see <a href="#bibliography">Bibliography</a>). Gamma is about 1.2 for the products
            of combustion of gaseous oxygen/hydrocarbon fuel.</p>

            <span v-if="unitSystem=='US'"><p><i>g<sub>c</sub></i> is a constant relating to the earth's gravitation and is equal to
            32.2 ft/sec/sec.</p></span>

            <p>For further calculations the reader may consider the following as constants
            whenever gaseous oxygen/hydrocarbon propellants are used:</p>
            
            <p>
                <span v-if="unitSystem=='US'"><i>R</i> = 65 ft-lb/lb°R</span><span v-else><i>R</i> = 350 J/(kg &#183; K)</span><br />
                𝛾 = 1.2<br />
                <span v-if="unitSystem=='US'"><i>g<sub>c</sub></i> = 32.2 ft/sec<sup>2</sup></span>
            </p>

            <p><i>T<sub>t</sub></i> is the temperature of the gases at the nozzle throat. The gas
            temperature at the nozzle throat is less than in the combustion chamber due to loss
            of thermal energy in accelerating the gas to the local speed of sound
            (Mach number = 1) at the throat. Therefore</p>

            <!-- Tt = Tc (1/(1+((gamma)-1)/2))  (8) -->
            <Equation name="T_t" label="8" />

            <p>For 𝛾 = 1.2</p>

            <!-- Tt = (.909)(Tc)            (9) -->
            <Equation name="T_t_val" label="9" />

            <p><i>T<sub>c</sub></i> is the combustion chamber flame temperature in <span v-if="unitSystem == 'US'">degrees Rankine
            (°R)</span><span v-else>kelvins (K)</span>, given by</p>

            <!-- T (degR) = T (°F) + 460    (10) -->
            <Equation name="T_c_val" label="10" :units="unitSystem" />

            <p><i>P<sub>t</sub></i> is the gas pressure at the nozzle throat. The pressure at the
            nozzle throat is less than in the combustion chamber due to acceleration of the gas
            to the local speed of sound (Mach number = 1) at the throat. Therefore</p>

            <!-- Pt = Pc(1+((gamma)-1)/2)^((gamma)/((gamma)-1))     (11) -->
            <Equation name="P_t" label="11" />

            <p>For 𝛾 = 1.2</p>

            <!-- Pt = (.564)(Pc)        (12) -->
            <Equation name="P_t_val" label="12" />

            <p>The hot gases must now be expanded in the diverging section of the nozzle to
            obtain maximum thrust. The pressure of these gases will decrease as energy is used
            to accelerate the gas and we must now find that area of the nozzle where the gas
            pressure is equal to atmospheric pressure. This area will then be the nozzle exit
            area.</p>

            <p>Mach number is the ratio of the gas velocity to the local speed of sound. The
            Mach number at the nozzle exit is given by a perfect gas expansion expression</p>

            <!-- Me^2 = 2/((gamma)-1)((Pc/Patm)^(((gamma)-1)/gamma) - 1)        (13) -->
            <Equation name="M_e2" label="13" />

            <p><i>P<sub>c</sub></i> is the pressure in the combustion chamber and <i>P<sub>atm</sub></i> is
            atmospheric pressure, or <span v-if="unitSystem == 'US'">14.7 psi</span><span v-else>101.3 kPa</span>.</p>

            <p>The nozzle exit area corresponding to the exit Mach number resulting from the
            choice of chamber pressure is given by</p>

            <!-- Ae = At/Me * ((1 + ((gamma)-1)/2 Me^2)/(((gamma)+1)/2))^(((gamma)+1)/2((gamma)-1)) (14) -->
            <Equation name="A_e" label="14" />

            <p>Since gamma is fixed at 1.2 for gaseous oxygen/hydrocarbon propellant products,
            we can calculate the parameters for future design use; the results are tabulated in
            <a class="table-link" href="#table-3">Table III</a>.</p>

            <h4>Table III</h4>

            <p>Nozzle Parameters for Various chamber pressures, 𝛾 = 1.2, <i>P<sub>atm</sub></i> = <span v-if="unitSystem == 'US'">14.7 psi</span><span v-else>101.3 hPa</span>.</p>
            
            <!-- TABLE 3 -->
            <div id="table-3" class="responsive-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th><i>P<sub>c</sub></i></th>
                            <th><i>M<sub>e</sub></i></th>
                            <th><i>A<sub>e</sub> / A<sub>t</sub></i></th>
                            <th><i>T<sub>e</sub> / T<sub>c</sub></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>1.95</td>
                            <td>1.79</td>
                            <td>0.725</td>
                        </tr>
                        <tr>
                            <td>200</td>
                            <td>2.34</td>
                            <td>2.74</td>
                            <td>0.65</td>
                        </tr>
                        <tr>
                            <td>300</td>
                            <td>2.55</td>
                            <td>3.65</td>
                            <td>0.606</td>
                        </tr>
                        <tr>
                            <td>400</td>
                            <td>2.73</td>
                            <td>4.6</td>
                            <td>0.574</td>
                        </tr>
                        <tr>
                            <td>500</td>
                            <td>2.83</td>
                            <td>5.28</td>
                            <td>0.55</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            Therefore,

            <!-- Ae = At (Ae/At)        (15) -->
            <Equation name="A_e2" label="15" />

            <p>The temperature ratio between the chamber gases and those at the nozzle exit is
            given by</p>

            <!-- Te = Tc (Te/Tc)        (16) -->
            <Equation name="T_e" label="16" />

            <p>The nozzle throat diameter is given by</p>

            <!-- Dt = SQRT(4At/(pi))    (17) -->
            <Equation name="D_t" label="17" />

            <p>and the exit diameter is given by</p>

            <!-- De = SQRT(4Ae/(pi))    (18) -->
            <Equation name="D_e" label="18" />

            <p>A good value for the nozzle convergence half-angle (β)
            (see <a class="figure-link" href="#figure-6">Fig. 6</a>) is 60°.
            The nozzle divergence half-angle, (α), should be no greater than 15° to
            prevent nozzle internal flow losses.</p>

            <!-- CH 3.2 -->
            <h2 id="combustion-chamber">Combustion Chamber</h2>

            <p>A parameter describing the chamber volume required for complete combustion is the
            characteristic chamber length, <i>L*</i>, which is given by</p>

            <!-- L* =  Vc/At (19) -->
            <Equation name="L_star" label="19" />

            <p class="formula-explanation">
                <span v-if="unitSystem=='US'">
                    where <i>V<sub>c</sub></i> is the chamber volume (including the converging section of
                    the nozzle), in cubic inches, and <i>A<sub>t</sub></i> is the nozzle throat area
                    (in<sup>2</sup>). For gaseous oxygen/hydrocarbon fuels, an <i>L*</i> of 50 to 100
                    inches is appropriate. <i>L*</i> is really a substitute for determining the chamber
                    residence time of the reacting propellants.
                </span>
                <span v-else>
                    where <i>V<sub>c</sub></i> is the chamber volume (including the converging section of
                    the nozzle), in cubic centimeters, and <i>A<sub>t</sub></i> is the nozzle throat area
                    (cm<sup>2</sup>). For gaseous oxygen/hydrocarbon fuels, an <i>L*</i> of 130 to 255
                    cm is appropriate. <i>L*</i> is really a substitute for determining the chamber
                    residence time of the reacting propellants.
                </span>
            </p>

            <p>To reduce losses due to flow velocity of gases within the chamber, the combustion
            chamber cross sectional area should be at least three times the nozzle throat area.
            This ratio is known as "contraction ratio".</p>

            <p>The combustion chamber cross-sectional area is given by</p>

            <!-- Ac = (pi)Dc^2/4        (20) -->
            <Equation name="A_c" label="20" />

            <p>The chamber volume is given by</p>

            <!-- Vc = AcLc + convergent volume      (21) -->
            <Equation name="V_c1" label="21" />

            <p>For small combustion chambers the convergent volume is about 1/10 the volume of
            the cylindrical portion of the chamber, so that</p>

            <!-- Vc = 1.1 (AcLc)        (22) -->
            <Equation name="V_c2" label="22" />

            <span v-if="unitSystem=='US'">
                <p>The chamber diameter for small combustion chambers (thrust level less than 75 lbs)
                should be three to five times the nozzle throat diameter so the injector will have
                usable face area.</p>
            </span>
            <span v-else>
                <p>The chamber diameter for small combustion chambers (thrust level less than 335 N)
                should be three to five times the nozzle throat diameter so the injector will have
                usable face area.</p>
            </span>

            <div class="note-box">SI-unit conversion in progress...</div>

            <!-- CH 3.3 -->
            <h2 id="chamber-wall-thickness">Chamber Wall Thickness</h2>

            <p>The combustion chamber must be able to withstand the internal pressure of the hot
            combustion gases. The combustion chamber must also be physically attached to the
            cooling jacket and, therefore, the chamber wall thickness must be sufficient for
            welding or brazing purposes. Since the chamber will be a cylindrical shell, the
            working stress in the wall is given by</p>

            <!-- S = PD/2t_w        (23) -->
            <div id="formula-23" class="formula"><img src="formulas/formula-23.png" alt="formula-23"></div>


            <p>where P is the pressure in the combustion chamber (neglecting the effect of
            coolant pressure on the outside of the shell), D is the mean diameter of the
            cylinder, and t<sub>w</sub> is the thickness of the cylinder wall. A typical
            material for small water-cooled combustion chambers is copper, for which the
            allowable working stress is about 8000 psi. The thickness of the combustion chamber
            wall is therefore given by</p>

            <!-- t_w = PD/16000     (24) -->
            <div id="formula-24" class="formula"><img src="formulas/formula-24.png" alt="formula-24"></div>

            <p>This is the minimum thickness; actually the thickness should be somewhat greater
            to allow for welding, buckling, and stress concentration. The thickness of the
            chamber wall and nozzle are usually equal.</p>

            <p>Equation (<a class="formula-link" href="#formula-24">24</a>) can also be used to calculate the wall thickness of the water
            cooling jacket. Here again, the value of t<sub>w</sub> will be the minimum thickness
            since welding factors and design considerations (such as O-rings, grooves, etc.)
            will usually require walls thicker than those indicated by the stress equation.
            A new allowable stress value must be used in Equation (<a class="formula-link" href="#formula-24">24</a>), dependent on the jacket
            material chosen.</p>

            <!-- CH 3.4 -->
            <h2 id="engine-cooling">Engine Cooling</h2>

            <p>The amateur should not consider building uncooled rocket engines since they can
            operate for only a short time and their design requires a thorough knowledge of
            heat and mass transfer engineering. Cooled rocket motors have provision for cooling
            some or all metal parts coming into contact with the hot combustion gases. The
            injector is usually self-cooled by the incoming flow of propellants. The combustion
            chamber and nozzle definitely require cooling.</p>

            <p>A cooling jacket permits the circulation of a coolant, which, in the case of
            flight engines is usually one of the propellants. However, for static tests and for
            amateur operation, water is the only coolant recommended. The cooling jacket
            consists of an inner and outer wall. The combustion chamber forms the inner wall and
            another concentric but larger cylinder provides the outer wall. The space between
            the walls serves as the coolant passage. The nozzle throat region usually has the
            highest heat transfer intensity and is, therefore, the most difficult to cool.</p>

            <p>The energy release per unit chamber volume of a rocket engine is very large, and
            can be 250 times that of a good steam boiler or five times that of a gas turbine
            combustion chamber. The heat transfer rate of a rocket engine is usually 20 to 200
            times that of a good boiler. It is apparent, therefore, that the cooling of a rocket
            engine is a difficult and exacting task. The complete heat transfer design of a
            rocket engine is extremely complex and is usually beyond the capabilities of most
            amateur builders. Some important empirical design guidelines are available, however,
            and are listed below:</p>

            <ol>
                <li>Use water as the coolant.</li>
                <li>Use copper for the combustion chamber and nozzle walls.</li>
                <li>Water flow velocity in the cooling jacket should be 20-50 ft/sec.</li>
                <li>Water flow rate should be high enough so that boiling does not occur.</li>
                <li>Extend the water cooling jacket beyond the face of the injector.</li>
                <li>A steady flow of cooling water is essential.</li>
            </ol>
            
            <!-- CH 3.5 -->
            <h2 id="heat-transfer">Heat Transfer</h2>

            <p>The largest part of the heat transferred from the hot chamber gases to the
            chamber walls is by convection. The amount of heat transferred by conduction is
            small and the amount transferred by radiation is usually less than 25%, of the
            total. The chamber walls have to be kept at a temperature such that the wall
            material strength is adequate to prevent failure. Material failure is usually caused
            by either raising the wall temperature on the gas side so as to weaken, melt, or
            damage the wall material or by raising the wall temperature on the liquid coolant
            side so as to vaporize the liquid next to the wall. The consequent failure is
            caused because of the sharp temperature rise in the wall caused by excessive heat
            transfer to the boiling coolant
            [see <a href="#additions-and-corrections">Additions and Corrections</a>].</p>

            <p>In water-cooled chambers the transferred heat is absorbed by the water. The water
            must have an adequate heat capacity to prevent boiling of the water at any point in
            the cooling jacket. The total heat transferred from the chamber to the cooling water
            is given by</p>

            <!-- Q = q A = w_w * c_p * (T - Ti)     (25) -->
            <div id="formula-25" class="formula"><img src="formulas/formula-25.png" alt="formula-25"></div>

            <p class="formula-explanation">
                where<br />
                Q = total heat transferred, Btu/sec<br />
                q = average heat transfer rate of chamber, Btu/in<sup>2</sup>-sec<br />
                A = heat transfer area, in<sup>2</sup><br />
                w<sub>w</sub> = coolant flow rate, Ib/sec<br />
                c<sub>p</sub> = specific heat of coolant, Btu/lb°F<br />
                T = temperature of coolant leaving jacket, °F<br />
                T<sub>i</sub> = temperature of coolant entering jacket, °F<br />
                the use of this equation will be illustrated in the section Example Design
                calculation.
            </p>

            <!-- CH 3.6 -->
            <h2 id="materials">Materials</h2>

            <p>The combustion chamber and nozzle walls have to withstand relatively high
            temperature, high gas velocity, chemical erosion, and high stress. The wall material
            must be capable of high heat transfer rates (which means good thermal conductivity)
            yet, at the same time, have adequate strength to withstand the chamber combustion
            pressure. Material requirements are critical only in those parts which come into
            direct contact with propellant gases. Other motor components can be made of
            conventional material.</p>

            <p>Once the wall material of an operating rocket engine begins to fail, final
            burn-through and engine destruction are extremely rapid. Even a small pinhole in the
            chamber wall will almost immediately (within one second) open into a large hole
            because the hot chamber gases (4000-6000 °F) will oxidize or melt the adjacent metal,
            which is then blown away exposing new metal to the hot gases.</p>

            <p>Exotic metals and difficult fabrication techniques are used in today's space and
            missile rocket engines, providing a lightweight structure absolutely required for
            efficient launch and flight vehicles. These advanced metals and fabrication
            techniques are far outside the reach of the serious amateur builder. However, the
            use of more commonplace (and much less expensive) metals and fabrication techniques
            is quite possible, except that a flightweight engine will not result. Since almost
            all amateur rocket firing should be conducted on a static test stand, this is not a
            severe restriction to the amateur builder. Experience with a wide variety of rocket
            engine designs leads to the following reconmendations for amateur rocket engines:</p>

            <ol>
                <li>The combustion chamber and nozzle should be machined in one piece, from
                copper.</li>
                <li>Those injector parts in contact with the hot chamber gases should also be
                machined from copper.</li>
                <li>The cooling jacket and those injector parts not in contact with the hot
                propellant gases, should be fabricated from brass or stainless steel.</li>
                <li>Expert machine and welding work is essential to produce a safe and useable
                rocket engine. Shoddy or careless workmanship, or poor welds, can easily cause
                engine failure.</li>
            </ol>

            <!-- CH 3.7 -->
            <h2 id="injectors">Injectors</h2>

            <p>The function of the injector is to introduce the propellants into the combustion
            chamber in such a way that efficient combustion can occur. There are two types of
            injectors which the amateur builder can consider for small engine design. One of
            these is the impinging stream injector in which the oxidizer and fuel are injected
            through a number of separate holes so that the resulting streams intersect with each
            other. The fuel stream will impinge with the oxidizer stream and both will break up
            into small droplets. When gaseous oxygen is used as the oxidizer, and a liquid
            hydrocarbon is used as fuel, the impingement of the liquid stream with the high
            velocity gas stream results in diffusion and vaporisation, causing good mixing and
            efficient combustion. A disadvantage of this type of injector is that extremely
            small holes are required for small engine flow rates and the hydraulic
            characteristics and equations normally used to predict injector parameters do not
            give good results for small orifices. The small holes are also difficult to drill,
            especially in soft copper.</p>

            <p>However, to provide a complete picture of the equations used in rocket engine
            design, we present below the equation for the flow of liquid through a simple
            orifice (a round drilled hole, for example)</p>

            <!-- w = Cd A SQRT(2g(rho)(deltaP))     (26) -->
            <div id="formula-26" class="formula"><img src="formulas/formula-26.png" alt="formula-26"></div>

            <p>
                where<br />
                w = propellant flow rate, lb/sec<br />
                A = area of orifice, ft<sup>2</sup><br />
                ΔP = pressure drop across orifice, psi<br />
                ρ = density of propellant, lb/ft<sup>3</sup><br />
                g = gravitational constant, 32.2 ft/sec<sup>2</sup><br />
                C<sub>d</sub> = orifice discharge coefficient<br />
            </p>

            <p>The discharge coefficient for a well-shaped simple orifice will usually have a
            value between 0.5 and 0.7.</p>

            <p>The injection velocity, or velocity of the liquid stream issuing from the
            orifice, is given by</p>

            <!-- v = Cd SQRT(2g((deltaP)/(rho)))        (27) -->
            <div id="formula-27" class="formula"><img src="formulas/formula-27.png" alt="formula-27"></div>

            <p>Injection pressure drops of 70 to 150 psi, or injection velocities of 50 to 100
            ft/sec are usually used in small liquid-fuel rocket engines. The injection pressure
            drop must be high enough to eliminate combustion instability inside the combustion
            chamber but must not be so high that the tankage and pressurization system used to
            supply fuel to the engine are penalized.</p>

            <p>A second type of injector is the spray nozzle in which conical, solid cone,
            hollow cone, or other type of spray sheet can be obtained. When a liquid hydrocarbon
            fuel is forced through a spray nozzle (similar to those used in home oil burners)
            the resulting fuel droplets are easily mixed with gaseous oxygen and the resulting
            mixture readily vaporized and burned. Spray nozzles are especially attractive for
            the amateur builder since several companies manufacture them commercially for oil
            burners and other applications. The amateur need only determine the size and spray
            characteristics required for his engine design and the correct spray nozzle can then
            be purchased at low cost. <a class="figure-link" href="#figure-7">Figure 7</a>
            illustrates the two types of injectors.</p>

            <p>The use of commercial spray nozzles for amateur built rocket engines is highly
            recommended.</p>

            <Figure name="Figure 7" src="img/fig-7.svg" caption="Fuel injectors for amateur rocket engines." />

            <!-- CH 4.0 -->
            <h1 id="example-design-calculation">Example design calculation</h1>

            <!-- CH 4.1 -->
            <h2 id="example">Example</h2>

            <p>The following example illustrates the use of the equations,
            tables and concepts presented in the previous sections.</p>

            <p>A small water-cooled liquid-fuel rocket engine is to be
            designed for a chamber pressure of 300 psi and a thrust of 20
            lbs. The engine is to operate at sea level using gaseous oxygen and
            gasoline propellants.</p>

            <!-- CH 4.1.1 -->
            <h3 id="example-step-2">Step 1</h3>

            <p>From <a class="table-link" href="#table-1">Table I</a> and Figures
            <a class="figure-link" href="#figure-3">3</a>,
            <a class="figure-link" href="#figure-4">4</a> and
            <a class="figure-link" href="#figure-5">5</a> we determine that the
            optimum O/F ratio is about 2.5 and that the ideal specific
            impulse will be about 260 sec. The total propellant flow rate is
            given by Equation (<a class="formula-link" href="#formula-3">3</a>)</p>

            <!-- w<sub>t</sub> = F/I<sub>sp</sub> = 20/260 = 0.077 lb/sec -->
            <div id="formula-28" class="formula"><img src="formulas/formula-28.png" alt="formula-28"></div>

            <p>Since the mixture ratio, <i>r</i>, is 2.5, we find from Equation (<a class="formula-link" href="#formula-5">5</a>)</p>

            <!-- w<sub>f</sub> = w<sub>t</sub>/(r + 1) = 0.077/3.5 = 0.022 lb/sec -->
            <div id="formula-29" class="formula"><img src="formulas/formula-29.png" alt="formula-29"></div>

            <p>From Equation (<a class="formula-link" href="#formula-6">6</a>) the oxygen flow rate is</p>

            <!-- w<sub>o</sub> = 0.077 - 0.022 = 0.055 lb/sec -->
            <div id="formula-30" class="formula"><img src="formulas/formula-30.png" alt="formula-30"></div>
            
            <p>As a check, we divide the oxygen flow rate by the fuel flow rate and
            the result is 2.5, as it should be.</p>

            <h3 id="example-step-2">Step 2</h3>

            <p>From <a class="table-link" href="#table-1">Table I</a> we note that the chamber
            gas temperature is 5742 °F or about 6202 degR.</p>

            <p>From Equation (<a class="formula-link" href="#formula-9">9</a>) the gas temperature at the nozzle throat is</p>

            <!-- T<sub>t</sub> = .909 (T<sub>c</sub>) = .909 (6202) = 5650 R -->
            <div id="formula-31" class="formula"><img src="formulas/formula-31.png" alt="formula-31"></div>

            <h3 id="example-step-3">Step 3</h3>

            <p>From Equation (<a class="formula-link" href="#formula-12">12</a>) the pressure at the nozzle throat is</p>

            <!-- P<sub>t</sub> = .564 (P<sub>c</sub>) = .564 (300) = 169 psi -->
            <div id="formula-32" class="formula"><img src="formulas/formula-32.png" alt="formula-32"></div>

            <h3 id="example-step-4">Step 4</h3>

            <p>The nozzle throat area is given by Equation (<a class="formula-link" href="#formula-7">7</a>)</p>

            <!-- <p>A<sub>t</sub> = (w/P<sub>t</sub>)(RT<sub>t</sub>/𝛾g<sub>c</sub>)<sup>1/2</sup></p> -->
            <div id="formula-33" class="formula"><img src="formulas/formula-33.png" alt="formula-33"></div>

            <div id="formula-34" class="formula"><img src="formulas/formula-34.png" alt="formula-34"></div>
            <!-- <p>A<sub>t</sub> = (.077/169)(9500)<sup>1/2</sup> = 0.0444 in<sup>2</sup></p> -->

            <h3 id="example-step-5">Step 5</h3>

            <p>The nozzle throat diameter is given by Equation (<a class="formula-link" href="#formula-17">17</a>)</p>

            <!-- <p>D<sub>t</sub> = (4A<sub>t</sub>/π)<sup>1/2</sup> = (0.0566)<sup>1/2</sup> = 0.238 in.</p> -->
            <div id="formula-35" class="formula"><img src="formulas/formula-35.png" alt="formula-35"></div>

            <h3 id="example-step-6">Step 6</h3>

            <p>From <a class="table-link" href="#table-3">Table III</a> we find that for a
            chamber pressure of 300 psi and a nozzle exit pressure of 14.7 psi (sea level)</p>

            <p>A<sub>e</sub>/A<sub>t</sub> = 3.65 so that the nozzle exit area is, from
            Eq. (<a class="formula-link" href="#formula-15">15</a>)</p>

            <!-- <p>A<sub>e</sub> = 3.65 A<sub>t</sub> = (3.655)(0.0444) = 0.162 in<sup>2</sup></p> -->
            <div id="formula-36" class="formula"><img src="formulas/formula-36.png" alt="formula-36"></div>

            <h3 id="example-step-7">Step 7</h3>

            <p>The nozzle exit diameter is from Eq. (<a class="formula-link" href="#formula-18">18</a>)</p>

            <!-- <p>D<sub>e</sub> = (4A<sub>e</sub>/π)<sup>1/2</sup> = (.2065)<sup>1/2</sup> = 0.4555 in.</p> -->
            <div id="formula-37" class="formula"><img src="formulas/formula-37.png" alt="formula-37"></div>

            <h3 id="example-step-8">Step 8</h3>

            <p>For this propellant combination we will assume a combustion chamber L* of 60
            inches. The combustion chamber volume is given by Eq. (<a class="formula-link" href="#formula-19">19</a>)</p>

            <!-- <p>V<sub>c</sub> = L* A<sub>t</sub> = (60)(.0444) = 2.67 in<sup>3</sup></p> -->
            <div id="formula-38" class="formula"><img src="formulas/formula-38.png" alt="formula-38"></div>

            <h3 id="example-step-9">Step 9</h3>

            <p>The chamber length is found from Eq. (<a class="formula-link" href="#formula-22">22</a>)</p>

            <!-- <p>V<sub>c</sub> = (1.1) (A<sub>c</sub> L<sub>c</sub>)</p> -->
            <div id="formula-39" class="formula"><img src="formulas/formula-39.png" alt="formula-39"></div>

            <p>However, we must first determine the chamber area or A<sub>c</sub>. We do this by
            assuming that the chamber diameter is five times the nozzle throat diameter or
            D<sub>c</sub> = 5D<sub>t</sub>,</p>

            <p>therefore D<sub>c</sub> = 1.2 in. and A<sub>c</sub> = 1.13 in<sup>2</sup></p>

            <p>Therefore,</p>

            <!-- <p>L<sub>c</sub> = V<sub>c</sub>/(1.1)(1.13) = 2.67/1.245 = 2.15 in</p> -->
            <div id="formula-40" class="formula"><img src="formulas/formula-40.png" alt="formula-40"></div>

            <h3 id="example-step-10">Step 10</h3>

            <p>Copper will be used for the combustion chamber and nozzle
            wall. The chamber wall thickness, is given by Eq. (<a class="formula-link" href="#formula-24">24</a>)</p>


            <!-- <p>t<sub>w</sub> = PD/16000 = (300)(1.2)/16000</p>
            <p>t<sub>w</sub> = 0.0225 inch</p> -->
            <div id="formula-41" class="formula"><img src="formulas/formula-41.png" alt="formula-41"></div>

            <p>To allow for additional stress and welding factors we shall set the
            wall thickness equal to 3/32 or 0.09375 inch and will assume that the
            nozzle wall has this thickness also.</p>

            <h3 id="example-step-11">Step 11</h3>

            <p>Previous experience with small watercooled rocket engines
            has shown that we can expect the copper combustion chamber and
            nozzle to experience an average heat transfer rate, q, of ahout 3
            Btu/in<sup>2</sup>-sec. The heat transfer area of the combustion chamber is the
            outer surface area of the chamber and nozzle. This surface area is
            given by</p>

            <!-- <p>A = (D<sub>c</sub> + 2t<sub>w</sub>)(L<sub>c</sub>) + area of nozzle cone</p> -->
            <div id="formula-42" class="formula"><img src="formulas/formula-42.png" alt="formula-42"></div>

            <!-- <p>A = 9.4 in<sup>2</sup> + area of nozzle cone</p> -->
            <div id="formula-43" class="formula"><img src="formulas/formula-43.png" alt="formula-43"></div>

            <p>The area of the nozzle cone up to the throat can be assumed to be
            about 10% of the chamber surface area so that</p>

            <!-- <p>A = (1.1)(9.4) = 10.35 in<sup>2</sup></p> -->
            <div id="formula-44" class="formula"><img src="formulas/formula-44.png" alt="formula-44"></div>

            <p>The total heat transferred into the coolant is given by Eq. (<a class="formula-link" href="#formula-25">25</a>)</p>

            <!-- <p>Q = q A = 3(10.35) = 31 Btu/sec</p> -->
            <div id="formula-45" class="formula"><img src="formulas/formula-45.png" alt="formula-45"></div>

            <h3 id="example-step-12">Step 12</h3>

            <p>The cooling water flow rate can be calculated by assuming
            a desired temperature rise of the water. If this is 40 °F then,
            from Eq. (<a class="formula-link" href="#formula-25">25</a>)</p>

            <!-- <p>w<sub>v</sub> = Q/(deltaT), where c<sub>p</sub> for water = 1.0</p> -->
            <div id="formula-46" class="formula"><img src="formulas/formula-46.png" alt="formula-46"></div>

            <p>where c<sub>p</sub> for water = 1.0.</p>

            <!-- <p>w = 31/40 = 0.775 lb of water per sec.</p> -->
            <div id="formula-47" class="formula"><img src="formulas/formula-47.png" alt="formula-47"></div>

            <h3 id="example-step-13">Step 13</h3>

            <p>The annular flow passage between the combustion chamber wall
            and the outer jacket must be sized so that the flow velocity of the
            cooling water is at least 30 ft/sec. This velocity is obtained when
            the flow passage has dimensions as determined below:</p>

            <!-- <p>v<sub>w</sub> = w<sub>w</sub>/(rho)A</p> -->
            <div id="formula-48" class="formula"><img src="formulas/formula-48.png" alt="formula-48"></div>

            <p>where v<sub>w</sub> = 30 ft/sec, w<sub>w</sub> = 0.775 lb/sec,
            (rho) = 62.4 lb/ft3, and A is the area of the annular flow passage,
            given by</p>

            <!-- <p>A = (π/4) (D<sub>2</sub><sup>2</sup> - D1<sup>2</sup>)</p> -->
            <div id="formula-49" class="formula"><img src="formulas/formula-49.png" alt="formula-49"></div>

            <p>where D<sub>2</sub> is the inner diameter of the outer jacket and D<sub>1</sub> is the
            outer diameter of the combustion chamber, given by</p>

            <!-- <p>D<sub>1</sub> = D<sub>c</sub> + 2t<sub>w</sub></p> -->
            <div id="formula-50" class="formula"><img src="formulas/formula-50.png" alt="formula-50"></div>

            <p>Substituting in the above equations</p>

            <!-- <p>D<sub>2</sub> = SQRT((4w<sub>w</sub>)/(v<sub>w</sub>ρπ) + D<sub>1</sub><sup>2</sup>)</p> -->
            <div id="formula-51" class="formula"><img src="formulas/formula-51.png" alt="formula-51"></div>
            
            <!-- <p>D<sub>2</sub> = (.0151)<sup>1/2</sup> = .123 ft = 1.475 inch</p> -->
            <div id="formula-52" class="formula"><img src="formulas/formula-52.png" alt="formula-52"></div>

            <p>Therefore</p>

            <!-- <p>D<sub>2</sub> - D<sub>1</sub> = 0.085 inch</p> -->
            <div id="formula-53" class="formula"><img src="formulas/formula-53.png" alt="formula-53"></div>

            <p>The water flow gap is 0.0425 inch.</p>

            <h3 id="example-step-14">Step 14</h3>

            <p>The fuel injector for this small rocket engine will be a
            commercial spray nozzle with a 75 degree spray angle. The required
            capacity of the nozzle is determined by the fuel flow rate</p>

            <!-- <p>w<sub>f</sub> = 0.022 lb/sec = 1.32 lb/ minute,</p> -->
            <div id="formula-54" class="formula"><img src="formulas/formula-54.png" alt="formula-54"></div>

            <p>Since there are six pounds of gasoline per gallon, the spray nozzle
            flow requirement is 0.22 gallon per minute (gpm). The spray nozzle
            can now be ordered from any of several suppliers (see List of
            Suppliers); nozzle material should be brass to ensure adequate
            injector heat transfer to the incoming propellant.</p>

            <p>If an impinging jet injector had been chosen, the
            determination of the required injector hole number and size would
            have been as follows:</p>

            <p>The flow area for fuel injection is given by Equation (<a class="formula-link" href="#formula-26">26</a>)</p>

            <!-- <p>A = w<sub>f</sub>/(C<sub>d</sub>) (2gρΔP)<sup>1/2</sup></p> -->
            <div id="formula-55" class="formula"><img src="formulas/formula-55.png" alt="formula-55"></div>

            <p>We will assume that C<sub>d</sub> = 0.7 with a fuel injection pressure drop
            of 100 psi. The density of gasoline is about 44.5 lb/ft<sup>3</sup>, so that</p>

            <!-- <p>A = .022/(.7)(6430) = 0.0000049 ft<sup>2</sup></p> -->
            <div id="formula-56" class="formula"><img src="formulas/formula-56.png" alt="formula-56"></div>

            <!-- <p>A = 0.000706 in<sup>2</sup></p> -->
            <div id="formula-57" class="formula"><img src="formulas/formula-57.png" alt="formula-57"></div>

            <p>If only one injection hole is used (a poor practice which can
            lead to combustion instability) its diameter would be</p>

            <!-- <p>D = (4Aπ)<sup>1/2</sup> = .0009<sup>1/2</sup> = 0.30 inch</p> -->
            <div id="formula-58" class="formula"><img src="formulas/formula-58.png" alt="formula-58"></div>

            <p>A number 69 drill could be used for this hole.</p>

            <p>If two injection holes are used, their diameter would be</p>

            <!-- <p>D = .00045<sup>1/2</sup> = 0.021 inch</p> -->
            <div id="formula-59" class="formula"><img src="formulas/formula-59.png" alt="formula-59"></div>

            <p>A number 75 drill could be used for these holes.</p>

            <h3 id="example-step-15">Step 15</h3>

            <p>The injection holes for the gaseous oxygen will be simple
            drilled orifices. The size of these orifices should be such that a
            gas stream velocity or about 200 ft/sec is obtained at design
            oxygen flow rate. The holes must not be so small that sonic velocity
            is achieved in the orifice passages since this would result in a high
            upstream pressure requirement to drive the required amount of oxygen
            through the orifices.</p>

            <p>If a spray nozzle fuel injector is used we will assume the use
            of four equally spaced oxygen injection ports parallel to the
            combustion chamber centerline around this nozzle. If we assume an
            injection pressure drop of 100 psi then the oxygen gas pressure at the
            entrance to the injection ports will be 400 psi (the chamber pressure
            plus the injection pressure drop). The density of gaseous oxygen at
            400 psi and a temperature of 68 °F is given by the perfect gas law
            (see <a class="table-link" href="#table-2">Table II</a>).</p>

            <!-- <p>ρ<sub>2</sub> = ρ<sub>1</sub>(P<sub>2</sub>/P<sub>1</sub>) = 2.26 lb/ft<sup>3</sup></p> -->
            <div id="formula-59" class="formula"><img src="formulas/formula-59.png" alt="formula-59"></div>

            <p>Assuming, incompressibility, the injection flow area is given by</p>

            <!-- <p>A = w<sub>o</sub>/ρv<sub>o</sub></p> -->
            <div id="formula-60" class="formula"><img src="formulas/formula-60.png" alt="formula-60"></div>

            <p>Since we know the oxygen flow rate and the desired injection
            velocity, we can easily find the total injection area</p>

            <!-- <p>A = .055/(2.26)(200) = 0.0001217 ft<sup>2</sup></p> -->
            <div id="formula-61" class="formula"><img src="formulas/formula-61.png" alt="formula-61"></div>

            <!-- <p>A = 0.0175 in<sup>2</sup></p> -->
            <div id="formula-62" class="formula"><img src="formulas/formula-62.png" alt="formula-62"></div>

            <p>Since there are to be four holes, each hole has an area of 0.004375
            in<sup>2</sup> and the diameter of each hole is</p>

            <!-- <p>D = (.00558)<sup>1/2</sup> = 0.0747 inch</p> -->
            <div id="formula-63" class="formula"><img src="formulas/formula-63.png" alt="formula-63"></div>

            <p>A number 48 drill could be used for these holes.</p>

            <p>These same size oxygen jets could also be used with two fuel
            jets in the impinging stream injector. The holes, oxygen and fuel,
            should be drilled at an angle of 45° with respect to the injector
            face with the intersection point of the streams about 1/4 inch inside
            the combustion chamber.</p>

            <!-- CH 4.2 -->
            <h2 id="design">Design</h2>

            <p>The foregoing design calculations provide the dimensions,
            thicknesses, and orifice sizes for the major components of our rocket
            engine. The actual design of the engine, however, requires engineering
            judgment and knowledge of machining, welding, and operational factors
            since these interact to determine the final configuration of the
            engine and its components. Perhaps the best way to accomplish the
            final design is to sit down with appropriate drafting materials and
            begin to draft a cross-section view of the engine. A scale of 2/1 (or
            twice actual size) is about right for these small engines and will
            enable the designer to better visualize the entire assembly.</p>
            
            <p>Using the dimensions obtained in the example calculation, and
            the design technique described shove, the rocket engine assembly
            design shown in <a class="figure-link" href="#figure-8">Figure 8</a> is obtained.
            The engine design features easy fabrication and assembly.</p>

            <!-- CH 5.0 -->
            <h1 id="fabrication">Fabrication</h1>

            <p>The fabrication and assembly of a small liquid fuel rocket engine is no more
            difficult than the more serious amateur machine projects, such as model steam
            engines, gasoline engines, and turbines. Because the rocket engine has no rotating
            parts, dynamic balance of components is not required. However, the use of quality,
            homogeneous materials and careful fabrication technique are definitely required to
            produce a safe, working rocket engine.</p>

            <p>A properly designed small liquid-fuel rocket engine requires the following
            machine and hand tools:</p>

            <ol>
                <li>6" or 10" metal-turning lathe, with attachments</li>
                <li>Precision drill press</li>
                <li>hand files, calipers, micrometers, etc.</li>
                <li>oxy-acetylene torch or small arc welder.</li>
            </ol>

            <p>Since a properly designed engine will have symmetrical parts, a milling machine
            or planer will not be required. The metal-turning lathe should have a repeatable
            accuracy of 0.001 inch. The drill press will be used to drill small diameter holes
            and should have a true running, high speed chuck.</p>

            <p>Mensuration equipment such as calipers, micrometers, etc., must be capable of
            inside and outside diameter measurements, lengths, and should be used to locate
            holes, recesses, and other features prior to actual machining.</p>

            <p>The joining of the various engine components is especially critical since the
            engine will operate at high pressure and high temperature.</p>

            <Figure name="Figure 8" src="img/fig-8.svg" caption="Assembly drawing of small liquid-fuel rocket engine. (1) injector assembly, (2) O-ring, (3) liquid fuel, (4) gaseous oxygen (5) engine mount, (6) coolant, (7) fuel spray nozzle, (8) combustion chamber, (9) outer shell, (10) coolant." />

            <p>The ability of the welder, and the welding techniques employed, should be as good
            as those required for aircraft work. Metal joints must be clean, with a close fit
            between parts to ensure adequate weld strength and integrity. To the extent possible
            assembled components should be tested with water (or nitrogen gas, but that is
            dangerous) prior to actual use with propellants. Repair of leaks or initially poor
            welds must be carefully done with subsequent re-testing with pressurized water
            (called hydro-testing or hydrostatic testing).</p>

            <p>As discussed previously, the combustion chamber should built as a one-piece unit.
            This arrangement, while more difficult from a machining point of view, eliminates
            the requirement for a joint of some kind between the two parts; this joint would be
            exposed to the hot combustion gases (5700 °F) on one side and would, in all
            probability, fail. Building the combustion chamber and nozzle in one piece
            eliminates this potential failure point. Care must be exercised during the machining
            of the copper chamber/nozzle to ensure constant wall thickness and the correct taper
            in the nozzle region. Thin wall sections are potential failure points and could
            result in almost immediate catastrophic failure during firing.</p>

            <p>Machining of the outer shell or jacket is less critical than the combustion
            chamber/nozzle. Typical materials for this part are stainless steel or brass. The
            inside diameter of the shell should have a smooth finish to reduce cooling pressure
            drop, nnd the outside finish of the shell, which will be visible to the world,
            should reflect the care and concern of the machinist. The shell will also contain
            the coolant entry and exit ports. Since the coolant (typically water) will probably
            have an entry pressure of 60 to 100 psi, these ports and fittings should be
            constructed with some care. The use of flare type fittings with metal tapered seats
            (such as those manufactured by Parker or Weatherland) is highly recomended. The
            shell will also feature a method of attaching the injector and for mounting the
            engine to a test or thrust stand. As shown in
            <a class="figure-link" href="#figure-8">Figure 8</a>, these two mounting
            requirements can be easily combined to simplify the design. The forces to be
            considered when designing the shell are not the thrust forces (which are small,
            typically on the order of 20-30 lbs) but, rather the pressure forces attempting to
            separate the injector from the shell. The pressure acting on the injector area out
            to the point of sealing between the injector and the outer shell is the combustion
            chamber pressure, which is typically 100 to 300 psi. The force attempting to
            separate the injector from the shell is slightly over 600 lbs for the design shown
            in <a class="figure-link" href="#figure-8">Figure 8</a> at a combustion pressure of
            300 psi. The bolts holding the two components together (and in this case also
            holding the assembly to the test mount) must withstand this force with and adequate
            safety factor (typically a factor of two). The number and size of bolts required can
            be obtained from <a class="table-link" href="#table-4">Table IV</a>, which gives the
            average load capacity of high strength steel bolts of various sizes. The strength of
            these bolts, however, depends to some extent on the adequacy of the threads in
            tapped holes, the tapped material, and the bolt tightening procedure used in
            assembly.</p>
                
            <h4>Table IV</h4>

            <p>Average load capacity of high strength steel bolts (safety factor = 2)</p>
            
            <!-- TABLE 4 -->
            <div id="table-4" class="responsive-table">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Bolt Size</th>
                            <th>Load Capacity, lb</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10-32</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>1/4-20</td>
                            <td>2400</td>
                        </tr>
                        <tr>
                            <td>1/4-28</td>
                            <td>2750</td>
                        </tr>
                        <tr>
                            <td>3/8-16</td>
                            <td>5800</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>The outer shell must also contain a sealing device to prevent the high pressure
            combustion chamber gas from flowing back past the injector. With an appropriately
            configured water-cooled design, the use of an elastomeric O-ring is highly
            desirable. A standard neoprene O-ring (manufactured by a number of companies, see
            <a href="#list-of-suppliers">List of Suppliers</a>) will give reliable service if
            the surrounding metal does not exceed a temperature of 200-300 °F . Dimensions and
            design parameters for O-rings and O-ring grooves are given in manufacturers supply
            catalogs.</p>

            <p>Another method of sealing is the use of an asbestos-copper crush gasket (very
            similar to those used on automobile spark plugs, only larger; see
            <a href="#list-of-suppliers">List of Suppliers</a>). The copper crush gasket is
            positioned by a V-groove cut in the surface of the outer jacket at the sealing
            point. The mating surface of the injector should be smooth and flat with no machine
            marks.</p>

            <p>Figure <a class="figure-link" href="#figure-9">9</a> illustrates the relationship between an O-ring and a copper crush gasket
            and their mating surfaces.</p>

            <Figure name="Figure 9" src="img/fig-9.svg" caption="Detail on O-ring and crush gasket sealing methods. O-ring groove dimensions are critical and should be obtained from suppliers handbooks. Crush gasket groove dimensions are non-critical; groove depth should be about 1/3 the thickness of uncrushed gasket." />

            <p>The injector should be fabricated from copper to provide maximum heat transfer
            from the injector face to the incoming propellants. The outer shell of the injector
            can be made from either copper, stainless steel, or brass. However, since the
            propellant inlet fittings (again these should be the tapered seat, metal-to-metal
            kind) should be stainless steel for best results. It is usually a good idea to make
            the injector outer shell from stainless steel so that the inlet fittings can be arc
            welded. Then the outer shell can be attached to the remainder of the injector by
            silver brazing without weakening the inlet fitting welds.</p>

            <p>Injection holes for the gaseous oxygen (and for the fuel, if impinging jets are
            used) will usually be made with numbered drills of small diameter. Extreme care
            should be used in drilling these holes, especially in soft copper. The drilled hole
            should have an entry and exit free from burrs or chips. It is vitally important that
            injector components be thoroughly cleaned and deburred prior to assembly. After
            injector welding, hot water should be used to thoroughly clean the injector assembly
            of brazing flux and residues, and the assembly should receive a final rinse in
            acetone or alcohol.</p>

            <!-- CH 6.0 -->
            <h1 id="testing-equipment">Testing Equipment</h1>

            <p>In this section we shall discuss the auxilliary equipment 
            needed to operate the rocket engine, the installation of this
            equipment, and its safe use in engine operation.</p>

            <!-- CH 6.1 -->
            <h2 id="feed-system">Feed System</h2>

            <p>The feed system for amateur rocket engine testing consists of
            a tank to store the liquid fuel, a regulated supply of high pressure
            nitrogen gas to force the fuel from the tank into the engine, a
            regulated supply of high pressure gaseous oxygen, and a control device
            for regulating the propellant flow rates. A typical pressurizing feed
            system is shown schematically in
            <a class="figure-link" href="#figure-10">Figure 10</a>.</p>

            <!-- CH 6.2 -->
            <h2 id="feed-system-components">Feed System Components</h2>

            <p>The components of a rocket engine feed system are precision
            instruments designed to handle gas and/or liquids at high pressure.
            While many of the components suitable for use in amateur rocket 
            feed systems are readily available from welding or automohile parts
            suppliers, they are usually relatively expensive. The amateur
            builder should expect the assembly of the feed system to be an 
            expensive project which, however, need be done only once. The use of
            quality products, made to do the job or very carefully modified and
            pre-tested, is mandatory for safe operation of amateur rocket engines.</p>

            <!-- CH 6.2.1 -->
            <h3 id="high-pressure-gas-cylinders">High Pressure Gas Cylinders</h3>

            <p>Gases stored in cylinders at high pressure (usually about 1800
            psi) are readily obtained from any bottled gas supplier or from many
            welding suppliers. Special fittings with nonstandard threads are used
            to prevent use of incorrect equipment with the cylinders. Although
            cylinders can be purchased, they are usually rented and then returned
            to the supplier for recharge at a nominal fee. High pressure gas
            cylinders should never he dropped or mishandled. Cylinders should be
            stored so they cannot fall over or inadvertently roll; the best way of
            securing is to chain or strap the cylinders to an appropriate stand or
            worktable. When cylinders are not in use the cap should be kept on to
            protect the cylinder valve. Several suppliers of high pressure gases
            publish instruction books on the care and use of high pressure
            cylinders (see <a href="#bibliography">Bibliography</a>); the amateur is
            encouraged to read and follow these professional instructions.</p>

            <Figure name="Figure 10" src="img/fig-10.svg" caption="Schematic diagram of gas pressure feed system. Propellants are a liquid fuel and gaseous oxygen. (1) high pressure gaseous nitrogen supply, (2) pressure regulator, (3) check valve, (4) fuel tank, (5) gaseous oxygen cylinders, (6) relief valve, (7) vent valve, (8) fill port, (9) drain valve, (10) remotely operated propellant control valve, (11) fuel filter, (12) purge valve, (13) rocket engine. P is pressure gauge." />

            <!-- CH 6.2.2 -->
            <h3 id="gaseous-nitrogen">Gaseous Nitrogen</h3>

            <p>Nitrogen is an inert gas compatible with all normally available
            materials. The amateur builder will have little dificulty with
            materials of construction for nitrogen but must be careful that all
            components are suitable for high pressure service. Cleanliness of
            components is important for proper and reliable operation.</p>

            <!-- CH 6.2.3 -->
            <h3 id="gaseous-oxygen">Gaseous Oxygen</h3>

            <p>Oxygen will not itself burn but does vigorously support the rapid
            combustion of almost all other materials. The amateur must be
            concerned not only with suitablility of components for high pressure
            service but also must use only components that are made from oxygen
            compatible materials and that are cleaned for oxygen service. All
            items, including lines, fittings, valves, regulators, etc., MUST be
            absolutely free from oil, grease, and similar contaminants. Thorough
            cleaning of all items in solvent, followed by a complete rinse in
            acetone, is an absolute must. Orders for commercial items should he
            marked to indicate their intended use with high pressure gaseous
            oxygen. Many commercial suppliers of valves and regulators offer a
            special service for cleaning their products for oxygen service. The
            amateur should avail himself of these services whenever possible, even
            though they will add slightly to the initial cost of the component.</p>

            <p>When cleaning components with solvent or acetone, the amateur
            builder should observe all rules of safety applying to these
            chemicals. They are toxic and easily ignited. Cleaning should be
            done outside and away from huildings, fires, or other possible
            ignition sources. These fluids should not be stored indoors but in
            vented lockers away from main buildings.</p>

            <!-- CH 6.2.4 -->
            <h3 id="fuel-tank">Fuel Tank</h3>

            <p>The fuel tank is a closed vessel which contains the liquid fuel
            at moderate pressure (300-500 psi). Tanks of various sizes and
            shapes, made from carbon- or stainless steel, are offered to the
            public from war surplus outlets. The amateur builder should be very
            careful if he decides to use such a tank. They should not be modified
            since in nearly all cases they are thin wall pressure vessels made for
            aircraft service, and additional outlets or welding to the tank wall
            could seriously weaken the tank. In all cases the tank should be
            hydrostatically tested to at least 1 1/2 times desired operating
            presure before use in the rocket engine feed system.</p>

            <p>The amateur may build (or have built) a tank especially for his
            requirements. Seamless tubing or pipe (mild steel or stainless steel)
            with welded flat end plates makes an excellent tank. Outlet ports are
            easily tapped in the flat end plates, The tank wall thickness is given
            by <a class="formula-link" href="#formula-22">Equation (22)</a></p>

             <!-- t_w = PD/2S -->
             <div id="formula-65" class="formula"><img src="formulas/formula-65.png" alt="formula-65"></div>


            <p>where P is the pressure in the tank (1 1/2 times the desired
            operating pressure), D is the outside diameter of the tank, t_w is the
            wall thickness, and S is the allowable stress. The size of the tank is
            determined by the size of the rocket engine and the desired operating
            time. The engine discussed in Example Design Calculation had a fuel
            flow rate of 0.022 lb/sec. A tank with a 4-inch inside diameter and 12
            inches long would hold enough gasoline to run this engine for 175
            seconds. If the tank outside diameter is 4.5 inches, the allowable
            stress in the steel is 20,000 psi, and the operating pressure is 500
            psi so that the design pressure is 750 psi, a tank minimum wall
            thickness of 0.085 inch is calculated. A wall thickness of 0.250 inch
            is chosen to allow for welding factors, stress concentrations, and the
            size of available seamless tubing. The tank inside diameter is 4.0
            inches. The flat end plates for this tank should be at least twice the
            thickness of the tank wall (i.e. for this case, at least 1/2 inch
            thick). Drilling and tapping should be done prior to welding, to
            prevent oil and metal chips from falling into the tank. Welding
            should be done by an expert with several passes for each end plate
            (see <a class="figure-link" href="#figure-11">Figure 11</a>). End plate ports
            should then be re-tapped. The tank should be thoroughly cleaned and hydrostatically
            tested prior to use in the rocket engine feed system.</p>

            <p>The fuel tank should contain enough ports, or the tank
            plumbing should be so arranged, that a safety relief valve (either
            spring loaded or a burst disc), gas inlet port, load and vent port,
            and fuel outlet and drain are available. Many of these functions can
            be incorporated as part of the gas inlet and fuel outlet plumbing so
            that only two ports, one on each end of the tank are required.</p>

            <Figure name="Figure 11" src="img/fig-11.svg" caption="Fuel tank end detail. Several weld passes should be used to attach the end plates to the seamless tubing." />

            <p>Tanks made from seamless tubing should not be greater than six
            inches in diameter; wall stress is a function of diameter, and at high
            stress, specialized design information, not usually available to the
            amateur builder, is required. Also, the force on the tank end plates
            increases rapidly with tank diameter.</p>

            <!-- CH 6.2.5 -->
            <h3 id="gaseous-nitrogen-regulator">Gaseous Nitrogen Regulator</h3>

            <p>The purpose of a regulator is to maintain a constant pressure
            on the downstream side of the regulator as the pressure in the gas
            cylinder on the upstream side decreases. A good quality regulator
            will maintain the downstream pressure quite accurately over a range
            of gas flow rates as long as the upstream cylinder pressure does not
            decrease so as to become too close to the downstream pressure. Thus, 
            all the gas in the cylinder is not usable since some excess pressure 
            (hence, gas) is required to drive the gas through, and maintain control 
            of, the regulator. The flow rate of nitrogen gas required for the
            fuel from the tank is relatively small and could be handled by a
            regular gaseous oxygen welding regulator equipped with nitrogen
            cylinder fittings. However, most welding regulators do not permit
            adjustment to the high downstream pressure required for rocket engine
            operation. A number of commercial firms (see
            <a href="#list-of-suppliers">List of Suppliers</a>) market
            regulators for non-welding purposes that are admirably suited for
            fuel tank pressurization. Especially attractive is the Grove Mity-Mite
            regulator with internal regulation. Inexpensive, special fittings are
            required to attach these regulators to the gas cylinder. These
            fittings are available from several sources (see
            <a href="#list-of-suppliers">List of Suppliers</a>).</p>

            <!-- CH 6.2.6 -->
            <h3 id="gaseous-oxygen-regulator">Gaseous Oxygen Regulator</h3>

            <p>The discussion of regulators for gaseous nitrogen service applies to
            gaseous oxygen also, except that the regulator should be especially
            cleaned for oxygen service and, if possible, metal-to-metal seats
            should be used within the regulator. Regulator manufacturers should
            be consulted for reccomendations on seat materials for use with
            gaseous oxygen in their regulators. Special fittings for attaching
            the regulator to the oxygen cylinder are available from the sources
            supplying nitrogen cylinder fittings. These sources can also supply
            cylinder manifold kits so that two or more oxygen cylinders can be
            used simultaneously to achieve long engine run durations.</p>

            <!-- CH 6.2.7 -->
            <h3 id="propellant-control-valves">Propellant Control Valves</h3>

            <p>The propellant control valves allow the operator to start and
            then manually remote-control the flow of each propellant in to the
            rocket engine. These valves should be stainless steel needle valves
            with Teflon packing or seals. Many manufacturers make this kind of
            valve (see <a href="#list-of-suppliers">List of Suppliers</a>). The valve for
            gaseous oxygen shoud be larger than the valve for the fuel line. Engines of the size
            discussed in Example Design Calculation should use a 1/4-inch ftel
            valve (that is, 1/4 National Pipe Thread line size) and a 1/2-inch
            oxygen valve. The tubing actnally entering, and leaving, the valves
            need not be this large, but the valves themselves should be as
            indicated to afford a range of flow control with minimum pressure drop
            across the valve. Since these valves control the flow of propellants,
            they should be mounted near the tanks and engine on the test stand,
            and operated remotely by means of valve stem extensions (see
            discussion on Test Stand).</p>

            <!-- CH 6.2.8 -->
            <h3 id="other-valves">Other Valves</h3>

            <p>Other valves required in the feed system include the fuel tank
            vent and fill valve, the drain valve, and the nitrogen purge valve.
            Inexpensive, high quality ball valves are highly reccomended for these
            functions since they offer positive shut-off, easy operation with
            handle indication of on or off, and full line opening. Brass or
            stainless steel valve bodies with Teflon seats are acceptable, and the
            valves may be line or panel mounted (see
            <a href="#list-of-suppliers">List of Suppliers</a>).</p>

            <h3 id="check-valves">Check Valves</h3>

            <p>Check valves permit fluid flow in one direction only. They are
            widely used in the aircraft and hydraulic industry and are
            manufactured by many companies. l/4-inch line size is recommended for
            all functions shown in <a class="figure-link" href="#figure-10">Figure 10</a> with
            the exception of the gaseous oxygen line check valve which should feature
            metal-to-metal seats and be at least 3/8 inch line size. Check valves should be
            thoroughly cleaned prior to use and tested to insure that tlle check is working
            properly.</p>

            <h3 id="relief-valves">Relief Valves</h3>

            <p>The fuel tank requires a relief device of some type to prevent
            tank failure in the event of over-pressurization. While this is high
            unlikely, it could happen if the gaseous nitrogen regulator failed to
            function or shut-off properly. An adjustable spring-loaded relief
            valve is reccomended because it may be set to different pressures as
            feed system uses change, and because, if used, does not have to be
            replaced. An alternate device is the burst disc which ruptures at a
            preset pressure and relieves the overpressure in the tank. Burst
            discs require replacement after actuation and are not pressure
            adjustable. A different disc must be used for each pressure range
            desired.</p>

            <h3 id="fiel-filter">Fuel Filter</h3>

            <p>Fuel injection holes on small liquid-fuel rocket engines are
            easily plugged with contaminants from tbe fuel tank and control
            system. A fuel filter which can filter out particles down to ten
            microns in size is highly reccommended and will save the amateur
            builder much grief when actual testing is started. Several concerns
            make small filters suitable for rocket engine feed systems (see
            <a href="#list-of-suppliers">List of Suppliers</a>).</p>

            <h3 id="pressure-cauges">Pressure Gauges</h3>

            <p>Fuel, oxygen, water, and combustion chamber pressure are
            essential measurements for rocket engine operation. Buordon-tube
            pressure gauges offer accuracy, ruggedness, low cost, and availability
            for this requirement. Numerous manufacturers make these gauges in a
            bewildering variety of styles, sizes, and prices. Bronze Bourdon
            tubes are recommended since they are fully compatible (when cleaned)
            with gaseous oxygen or hydrocarbon fuel and are so widely used that
            significant cost savings are possible.</p>

            <p>Small (2 1/2 or 3-inch diameter) high pressure gauges similar to
            those used on oxygen welding regulators should be used by the amateur
            builder for measuring pressure in the high pressure gas cylinders or
            manifolds. These gauges can be obtained from a welding supply shop.</p>

            <p>Gauges for fuel, oxygen, water, and combustion chamber pressure
            should be at least 3 1/2 inch diameter for easv reading, from a
            distance. These 3 1/2 Acaloy gauges of Helicoid (see
            <a href="#list-of-suppliers">List of Suppliers</a>) are recommended because of their
            reliability and low cost. These gauges are easily panel mounted and make a neat test
            stand installation.</p>

            <h3 id="plumbing">Plumbing</h3>

            <p>Plumbing refers to tbe flow tubes and fittings used to collnect
            the components discussed previously. 1/4-inch diameter stainless steel
            tubing for the fuel and nitrogen systems and 3/8 inch diameter
            stainless tubing for the oxygen line are recommended. Flare fittings
            with metal to metal seats are also recommended for joining the tubing
            to other components. 1/4 and 3/8 inch diameter copper tubing can also
            be used for the fuel, oxygen, and nitrogen supply system but is not as
            desirable as stainless steel and is more easily flared. The amateur
            builder should use only good flaring tools and should form or bend
            tubing only with a tube bender. Where the fittings screw into fuel
            tank, valve, or other components having pipe threads, the use of
            Teflon tape on the threads is recommended. No other pipe thread
            compound should be used, especially on gaseous oxygen components.</p>


            <!-- CH 7.0 -->
            <h2 id="test-stand">Test Stand</h2>

            <p>The amateur rocket engine test stand is a structure which incorporates a 
            method for firmly mounting the rocket engine (preferably in a nozzle-down 
            attitude), a mounting for the propellant flow control needle valves, the 
            fuel tank and associated plumbing, and the oxygen and nitrogen cylinders 
            with regulators and associated plumbing. The operator's station, which
            is really a part of the test stand, should be physically separated from 
            the test stand proper by at least 20 feet, witll a shrapnel barricade 
            between. The operator's station should contain the control valve extensions,
            the ignition system battery and associated switches, and a mirror system 
            so that the operator does not directly view the operating rocket engine.</p>
            
            <p>The greatest hazard in testing small rocket engines is from shrapnel 
            in the event of engine explosion or disintigration. Therefore, the test 
            stand proper should be suitably barricaded to reduce shrapnel effect 
            in all directions.</p>

            <Figure name="Figure 12" src="img/fig-12.png" caption="Test stand for small liquid-fuel rocket engines." />

            <p><a class="figure-link" href="#figure-12">Figure 12</a> shows schematically the
            proper arrangement of components for a safe rocket engine test stand. The rocket
            engine is separated from the propellant flow control valves by a 1/8-inch thick
            steel barricade. The engine is firmly attached to a section of steel
            channel in the nozzle down position. This is the safest orientation
            for a liquid-fuel rocket engine since excess fuel, in the event of an
            ignition failure, simply drains out of the engine nozzle. The engine
            is mounted high enough from the ground so that no flame chute or other
            complicated exhaust deflector or fixture is required. The compressed
            gas cylinders (one nitrogen and two oxygen) are mounted at the rear of
            the test stand and are separated from the control valves compartment
            by another barricade made from one-inch thick plywood. The nitrogen
            and oxygen regulators are mounted on this plywood barricade above the
            cylinders. In this manner, expended cylinders may he replaced with
            charged cylinders without disturbing the regulators or plumbing. A
            formed piece of stainless steel tubing between the oxygen manifold and
            the oxygen regulator and a similar piece of tubing between the
            nitrogen cylinder and its regulator are removed during cylinder
            exchange, and then reconnected. Lines should always be capped when not
            in use to prevent entry of dirt and other foreign objects.</p>

            <p>The fuel tank is mounted beteeen the forward steel barricade and
            the rear plywood barricade on a metal cross-piece attached to both
            barricades. The tank is mounted in the vertical position with the
            liquid outlet at the bottom.</p>

            <p>The propellant flow control valves are mounted one atop the other
            in a metal bracket which is attached to the forward steel barricade.
            Panel mounted needle valves are recommended since they facilitate
            mounting in the manner described, and do not place mounting or
            operating stresses on the propellant flow tubing. Valve stem
            extensions, made from 1/4-inch pipe permit operation of the control
            valves from the operator's remote control station, which is located at
            least twenty feet from the test stand proper. Pressure gauges for fuel
            tank pressure, oxygen line pressure, cooling water exit pressure and
            combustion chamber pressure are mounted in a panel which is attached
            to the forward and rear barricades and which faces the operator's
            remote station.</p>

            <p>Cooling water for the rocket engine is brought into a hose
            coupling attached to the stand, with semi-permanent plumbing between
            the coupling and the rocket engine. Water flowing from the cooling
            jacket should be directed away from the engine or can be directed
            downward onto a 3-inch deep layer of coarse stones laid beneath the
            roeket engine exhaust. These stones will prevent the engine exhaust
            from picking up dirt and dust; the water will cool the stones and
            extend their useful life. The jet of cooling water can be observed by
            the operator as an indication that cooling water is actually flowing
            through the engine.</p>

            <p>The test stand proper should have a framework made from welded or
            bolted steel angle. The forward steel and rear plywood barricade are
            bolted to this angle framework providing rigidity and strength. The
            test stand should be firmly attached to the surface of the test area
            either by bolting to a concrete pad or by weighing down with sand bags
            or concrete weights.</p>

            <!-- CH 8.0 -->
            <h1 id="safety">Safety</h1>

            <p>Because of the physical hazards involved in handling propellants
            and controlling high pressure combustion proeesses, certain elementary
            safety precautions must be observed in static testing of rocket
            engines. During the design, and later, the operation of amateur liquid
            rocket engines, the following general safety precautions should be
            observed:</p>

            <ol>
                <li>The operator should be protected by a suitable barricade located
                some distance (at least 20 feet) from the test unit.</li>

                <li>Control of valves during engine ignition and steady-state
                operation should be by remote means, which for amateur units is best
                achieved by manual control of needle valves via valve stem extensions.</li>

                <li>A large chemical fire extinguisher (or, at least, a plentiful
                supply of water) should always be on hand.</li>

                <li>The operator should not view the test unit directly, but should
                use a mirror arrangement (somewhat like a periscope) or use a thick
                layer of reinforced safety glass attached to the operator's
                barricade. REMEMBER, the primary danger is from shrapnel in the event
                of engine explosion.</li>

                <li>Separating of fuel and oxidizer storage reduces the fire and
                explosion hazard and limits the amount of propellant stowed in any one
                area.</li>

                <li>The test stand unit should be barricaded on several sides to
                reduce shrapnel effect in event of explosion.</li>

                <li>Valves, pressure gauges, and other components which directly
                sense fluid properties should not be located in the operator's
                station, but should be on the test stand and remotely read. This rule
                does not apply to electrical instrumentation wherein a transducer is
                located on the test stand and an electrical readout (such as a meter)
                is located at the operator's station (this type of instrumentation is
                very expensive and is beyond the reach of most amateurs
                [see <a href="#additions-and-corrections">Additions and Corrections</a>]).</li>

                <li>Warning signals should be given prior to tests (or whenever gas
                cylinder valves are open) to notify personnel that the area is
                hazardous. A test must <strong>NEVER</strong> be conducted until the operator
                has assured himself that all personnel are behind safety barricades or
                otherwise protected.</li>

                <li>Personnel should be permitted to work in the test area only if
                fuel and oxidizer are separated and not pressurized.</li>

                <li>Personnel handling propellants should wear safety equipment such
                as gloves, face shields, or rubber aprons. Remember that most fuels
                are toxic; do not breathe fuel vapors for even a short time.</li>

                <li>No smoking is ever permitted anywhere near a test area when
                propellants are alse present, Remember vapors from hydrocarbon fuels
                (such as gasoline) can travel long distances from the test area and
                can be ignited at a remote point travelling back to the test stand.</li>

                <li>A check-off list is helpful when conducting a rocket engine
                firing and should be made up of both technical events and safety items
                to be completed prior to the firing.</li>
            </ol>

            <!-- CH 9.0 -->
            <h1 id="engine-check-out-and-calibration">Engine Check-Out and Calibration</h1>

            <p>After the rocket engine has been fabricated, several
            check-out tests and flow calibrations should be made prior to
            testing with live propellants.</p>

            <!-- CH 9.1 -->
            <h2 id="leak-testing">Leak Testing</h2>

            <p>Connect the engine cooling jacket to a readily available
            source of pressurized water (such as lawn or house supply; pressure
            should be 50-100 psi with no flow). Attach a pressure gauge to the
            outlet port of the jacket and open the water valve, allowing water to
            fill the jacket. Observe the jacket and engine for leaks. There should
            be no leaks.</p>

            <p>A similar pressure check should be performed on the fuel
            manifold of the injector. Since the injector face is not easily
            blanked off, perform this test by flowing water through the
            injector. Use a filter in the vater line to avoid plugging the small
            fuel injection holes. Use a pressure gauge attached to the water line
            as near to the injector fuel entry port as possible. There should be
            no leaks.</p>

            <!-- CH 9.2 -->
            <h2 id="flow-calibration">Flow Calibration</h2>

            <p>The water flow rate through the engine cooling jacket should be
            determined for various inlet pressures. Use a bathroom or other
            available scale to weigh, in a container, water flowing through the
            engine over a timed period. Water pressure can be measured either at
            the entrance or exit of the cooling jacket. Attach a flexible hose
            (garden variety will do) to the outlet of the cooling jacket and start
            water flowing through the jacket at the desired pressure. Once steady
            flow has been achieved quickly move the hose outlet into the catch
            container for a period of 30 seconds, then quickly remove the hose
            from the container. Use a stop or sweep second watch for the timing
            and be accurate! Obtain the net weight of collected water by
            subtracting from the weight of the filled container its empty weight.
            Divide the net weight by the time during which water was collected and
            the result will be water flow rate in lb/sec. This operation should be
            repeated several times at different pressures to obtain the flow
            characteristics of the coolant jacket. If insufficient water pressure
            is available to achieve the design water flow rate, check the size of
            tubing or hose used between the water source and the engine; it may be
            restricting the water flow rate. Check also the size of the flexible
            duct hose used. If these tests show that greater pressure is required
            to achieve the desired flow rate, a different source of cooling water
            may be required. Under extreme conditions, an air-presurized water
            tank or a motor-driven pump may be required. Another solution is to
            disassemble the engine and re-bore the outer shell to open up the
            water flow passage. Material should NOT be removed from the
            combustion chamber/nozzle.</p>

            <p>Flow rate tests of the injector, using water, can be performed in
            a manner similar to the cooling system calibration, although their
            worth is questionable. The flow characteristics of water and the
            hydrocarbon fuels are different, so that a water calibration is not
            directly comparable to what will occur when fuel is used. However, the
            pressure drop required to flow a given quantity of water will provide
            some indication of how closely design objectives were achieved. This
            test should be conducted in the same manner as the cooling water
            calibration test except that the flow time should he long enough to
            accumulate at least ten pounds of water.</p>

            <!-- CH 9.3 -->
            <h2 id="leak-testing">Test Stand Checkout</h2>

            <p>After the test stand and operator's area are completed and
            components installed, tests should the conducted to determine that no
            gas or liquid leaks will occur when actual propellants are used. Fill
            the tank with clean water. Cap off the fuel and oxygen lines where
            they would normally attach to the engine. Pressurize the system to 100
            psi and check for leaks. A soap solution can be used to check around
            all fittings and seals. Soap bubbles indicate the presence of a gas
            leak. If no leaks are present, increase the pressure to 200 psi and
            repeat the detection procedure. Continue this procedure until the test
            stand operating pressure is reached and no leaks are present.
            Depressurize the system and refill the fuel tank with clean water.
            Attach the rocket engine to its test mount and connect all
            tubing. Pressurize the stand in the normal manner and practice the
            ignition and operating sequence using water as fuel (gaseous oxygen
            can safely he used in these tests, if desired). If no leaks develop,
            empty the fuel tank of water and dry by flushing with nitrogen gas for
            several seconds. The engine and test stand are now ready for their
            first hot firing.</p>

            <!-- CH 10.0 -->
            <h1 id="ignition-and-operation">Ignition and Operation</h1>

            <p>Discussion of propellant ignition has been reserved until this
            point since it is really a test stand function and is required only
            for actual operation of the engine. The propellants used in amateur
            rocket engines require a separate source for ignition. Because the
            engines are small, the use of an engine-mounted spark plug is not
            generally feasible. Even if it were, the ignition of incoming
            propellants in the combustion chamber by a small spark plug is
            dangerous and unreliable. Propellant timing is extremely important in
            a bi-propellant liquid rocket engine. An excess of either propellant
            (if both are liquid) in the combustion chamber can lead to severe
            over-pressure upon ignition (known as "hard" start) and possible
            fracture of the combustion chamber. The amateur engine using gaseous
            oxygen is not nearly as sensitive to hard starts as if the oxidizer
            were a liquid.</p>

            <p>Hundreds of tests with small liquid-fuel rocket engines employing
            gaseous oxygen as the oxidizer have indicated that hot-source ignition
            provides excellent propellant ignition characteristics, and
            drastically reduces hard starts. Hot-source ignition works as follows:
            two lengths of insulated #16 or #18 solid wire are taped together and
            their exposed ends are bent to form a spark gap of about 3/32-inch. A
            small amount of cotton is wrapped around, or attached to, thc wires
            very near the spark gap but not obstructing it. This ignition assembly
            is pushed through the nozzle into the combustion chamber of the rocket
            engine so that the spark gap is in the lower end of the combustion
            chamber but not blocking the nozzle throat. The wires outside the
            engine are bent or taped to hold the ignition assembly in position
            during the ignition phase. The free ends of the two wires are attached
            to the spark source (a Ford Model-T spark coil is ideal for this
            purpose). <a class="figure-link" href="#figure-13">Figure 13</a> details this
            hot-source igniter. The ignition procedure, after the test stand is prepared for
            firing is:</p>

            <Figure name="Figure 13" src="img/fig-13.png" caption="Hot-source igniter for small liquid fuel rocket engines using gaseous oxygen oxidizer. Ignitor is consumed during each use and must be replaced." />

            <ol>
                <li>The operator ascertains that the area is clear and ready for
                firing.</li>

                <li>The operator checks operation of the spark coil and then
                disconnects the coil from the battery for safety. The battery should
                be at the operator's remote station.</li>

                <li>The ignitor cotton is soaked in gasoline or kerosene.</li>

                <li>The ignitor is pushed through the nozzle into the combustion
                chamber and secured.</li>

                <li>Gas cylinder valves are opened, the fuel tank is pressurized,
                and all gas pressures adjusted to operating values.</li>

                <li>Cooling water is allowed to flow through the engine at the
                proper rate.</li>

                <li>The firing bell or horn is sounded. The spark coil is
                reconnected to its battery.</li>

                <li>The oxygen flow needle valve is opened very slightly to allow a
                very small flow of gaseous oxygen to pass over the ignitor and out the
                combustion chamber.</li>

                <li>The spark coil is energized. Inside the combustion chamber the
                cotton igitor should immediately burst into flame in the oxygen
                atmosphere. The operator may have difficulty ascertaining that the
                cotton is actually burning although small flaming bits of material may
                be ejected from the nozzle.</li>

                <li>The fuel control needle valve is now opened very slightly to
                allow fuel to flow into the combustion chamber. A flame should
                immediately appear at the nozzle exit and a low whistling sound should
                be heard.</li>

                <li>The oxygen and fuel flow rates should now be rapidly and 
                simultaneously increased by opening the control needle valves until tie 
                combustion chamber pressure gauge indicates that desired conditions 
                Exist inside the chamber.</li>

                <li>The operator will need to judge whether more or less oxygen is
                required for desired O/F ratio operation. More oxygen is required if
                the exhaust is bright yellow or smoky. (this is an indication of
                unburned carbon in the exhaust); if the exhaust is transparent or
                bluish the oxygen flow should he decreased slightly. The correct
                mixture ratio is achieved when the exhaust gases are transparent (or
                nearly so) but the supersonic standing shocks (Mach diamonds) in the
                exhaust are clearly seen. Remember that as you vary the fuel and
                oxidizer flows you are changing not only the amount of material
                passing through the engine but are also affecting the temperature of
                the burning gases. Both of these effects will affect the combustion
                chamber pressure.</li>

                <li>The noise from the engine will he quite high, but it is a good
                indicator of engine operation. It may be necessary to wear ear
                protection because of this high noise level.</li>

                <li>The operator should have a timer or have someone time the engine
                run. It is quite safe to simply let the engine run out of liquid
                fuel. The gaseous nitrogen pressurizing the fuel tank then purges the
                fuel supply system automatically. The engine will abruptly stop
                operation and the operator can then turn off the flow of gaseous
                oxygen. If the engine is to be stopped prior to fuel depletion the
                fuel flow control valve should be quickly turned off, followed by
                opening of the nitrogen purge valve. After the engine has stopped
                operation (thus assuring that the nitrogen purge has forced all fuel
                from the engine) the gaseous oxygen valve may be turned off. The
                nitrogen purge valve is closed, the cylinder valves are closcd, and
                the fuel tank vent valve opened. The oxygen line is vented by briefly
                opening the oxygen flow needle valve. Water should be allowed to flow
                through the engine cooling jacket for several minutes after run
                termination.</li>

                <li>In the event of engine failure, the shutdown sequence detailed in 
                (14), above, should be followed. Always shut-off the liquid fuel first. 
                If engine metal parts are burning, also immediately shut-off the flow of 
                gaseous oxygen (metal will burn vigorously in an oxygen environment).</li>

                <li>A new ignitor will be required for each ignition attempt or firing. 
                The ignitor assembly is partially consumed during the ignition process 
                and residue is quickly blown from the combustion chamber upon ignition of 
                the liquid fuel.</li>

                <li>Always inspect the engine and other components for damage, apparent 
                overheating or hot spots prior to another firing.</li>

                <li>Some engine designs may exhibit combustion instability (chugging, 
                chuffing, erratic combustion, etc.) at low chamber pressures or low fuel 
                injection velocities. To avoid this problem, the operator should rapidly 
                increase the chamber pressure after initial introduction of the 
                liquid fuel.</li>
            </ol>

            <p>Ignition and operation of small liquid-fuel rocket engines in the
            manner described offers the amateur a relatively safe and interesting
            activity. The operator will quickly discover and use many procedures
            to improve engine and test stand operation.</p>

            <p>After achieving initial operation of the engine and test stand,
            the amateur can begin to consider methods of measuring engine thrust,
            determining the heat transfer to the cooling water, and noting the
            characteristics of the rocket engine exhaust. Photography of this
            exhaust is a definite challenge. As these additional features are
            added to the experimertal set-up, the amateur should always keep
            safety and safe operating procedures foremost in mind.</p>

            <!-- CH 11.0 -->
            <h1 id="the-law">The Law</h1>
            
            <p>There are no known laws prohibiting the design or construction of rocket engines,
            rocket vehicles or accessories, in the United States. However, certain communities
            do have laws prohibiting the operation of rocket motors or engines or the free
            flight of rocket powered vehicles. Prior to actually firing a rocket engine the
            amateur builder should make certain that he is not violating established ordinances.
            If ordinances prohibit local testing, a remote site may be needed.</p>

            <p>The amateur builder should keep in mind that a rocket engine, even a small one,
            is an extremely noisy devlce. If local ordinances permit testing in a populated
            area, the amateur should consider the effect of engine operation on his neighbors
            before the initial firing. The noise of a rocket engine comes from the shearing
            action between the high velocity exhaust jet and the surrounding atmospere. Some of
            the noise can be eliminated by firing the engine into a water-cooled duct. Ample
            quantities of water must be sprayed into the exhaust duct to rapidly cool the rocket
            exhaust stream and to protect the duct itself. However, this technique restricts
            viewing of the rocket exhaust plume and eliminates one of the unique features of
            rocket engine operation.</p>

            <!-- CH 12.0 -->
            <h1 id="bibliography">Bibliography</h1>
            
            <p>The reader is urged to consult any of the following books for further information
            relating to rocket engines, materials, or design.</p>

            <ul>
                <li><i>Rocket Propulsion Elements</i>, by George P. Sutton. John Wiley & Sons, Inc., New York, 1964.</li>
                <li><i>Design of Liquid, Solid, and Hybrid Rockets</i>, by R. L. Peters. Hayden Book Co. Inc., New York, 1965.</li>
                <li><i>Elements of Flight Propulsion</i>, by J. V. Foa. John Wiley & Sons, Inc., New York, 1960.</li>
                <li><i>Rocket Propulsion</i>, by M. Barrere and others. Elsevier Publishing Co., Netherlands 1960.</li>
                <li><i>[Aerospace Propulsion</i>, by Dennis G. Shepherd, Elsevier Publishing Company, 335 Vanderbilt Avenue, New York, NY, 1972. ISBN 71-190302.]</li>
                <li><i>Rocket Encyclopedia Illustrated</i>. Aero Publishers. Inc., Los Angeles 26, California, 1959.</li>
                <li><i>Thermodynamics</i>, by Gordon J. Van Wylen. John Wiley & Sons, Inc., New York 1959.</li>
                <li><i>Fluid Mechanics</i>, by Victor L. Streeter. McGraw Hill Book Company, Inc., New York, 1966.</li>
                <li><i>Heat Transmission</i>, by W. H. McAdams. McGraw-Hill Book Company, Inc., New York, latest edition.</li>
                <li><i>Design of Machine Elements</i>, by M. F. Spotts. Prentice-Hall, Inc., Englewood Cliffs, N.J., 1955.</li>
                <li><i>Mechanics of Materials</i>, by Laurson & Cox. John Wiley & Sons, Inc., New York, 1955.</li>
                <li><i>Stainless Steel Handbook</i>, published by Allegheny Ludlum Steel Corp., Pittsburgh 22, Pa., 1959.</li>
                <li><i>Alcoa Aluminum Handbooks</i>, published by Aluminum Company of America. Pittsburgh. 1959.</li>
                <li><i>Alcoa Handlbook of Design Stresses for Aluminum</i>, published by Aluminum Company of America, Pittsburgh.</li>
                <li><i>Matheson Compressed Gas Data Book</i>, published by Matheson, P.O. Box 85 East Rutherford N.J. 1966.</li>
            </ul>

            <!-- CH 13.0 -->
            <h1 id="list-of-suppliers">List of Suppliers</h1>

            <p>The following list of suppliers is not complete since there are literally
            hundreds of companies in the United States manufacturing items of interest and use
            to the amateur rocket engine builder. The reader is urged to consult his nearest city's
            telephone book Yellow Pages. Illustrated catalogs can be obtained by writing the
            companies listed below; ask for a current price list and the name of the nearest
            supplier.</p>

            <ul class="supplier-list">
                <div class="left-column">
                    <li>
                        <h3>Regulators</h3>
                        <ul>
                            <li>
                                <p>
                                    Grove Valve and Regulator Co.<br />
                                    6 529 Hollis Street<br />
                                    Oakland, California 94608
                                </p>
                            </li>
                            <li>
                                <p>
                                    Victor Equipment Co.<br />
                                    840-854 Folsom Street<br />
                                    San Francisco, California 94107
                                </p>
                            </li>
                            <li>
                                <p>
                                    The Harris Calorific Co.<br />
                                    5501 Cass Avenue<br />
                                    Cleveland, Ohio 44102
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Needle Valves</h3>
                        <ul>
                            <li>
                                <p>
                                    Dragon Engineering Co.<br />
                                    Excelsior Drive & Carmenita<br />
                                    P. O. 80x 489<br />
                                    Norwalk, California 90650
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                            <li>
                                <p>
                                    Republic Manufacturing, Co.<br />
                                    15655 Brookpark Road<br />
                                    Cleveland Ohio 44142
                                </p>
                            </li>
                            <li>
                                <p>
                                    Robhins Aviation, lnc.<br />
                                    3817 Santa Fe Avenue<br />
                                    Vernon, California 90058
                                </p>
                            </li>
                            <li>
                                <p>
                                    Circle Seal Products Co., Inc.<br />
                                    East Foothill Blvd. & Craig Street<br />
                                    Pasadena, California 91107
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Ball Valves</h3>
                        <ul>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                            <li>
                                <p>
                                    Jamesbury Corporation<br />
                                    669 Lincoln Street<br />
                                    Worcester, Massachusetts 01605
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hydromatics, Jnc.<br />
                                    7 Lawrence Street<br />
                                    Bloomfield, New Jersey 07003
                                </p>
                            </li>
                            <li>
                                <p>
                                    Republic Manufacturing Co.<br />
                                    15655 Brookpark Road<br />
                                    Cleveland Ohio 44142
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Check Valves</h3>
                        <ul>
                            <li>
                                <p>
                                    Circle Seal Products Co., Inc.<br />
                                    East Foothill Blvd. & Craig Street<br />
                                    Pasadena, California 91107
                                </p>
                            </li>
                            <li>
                                <p>
                                    Republic Manufacturing Co.<br />
                                    15655 Brookpark Road<br />
                                    Cleveland, Ohio 44142
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Filters</h3>
                        <ul>
                            <li>
                                <p>
                                    Purolator Products, Inc.<br />
                                    1000 New Brunswick Avenue<br />
                                    Rahway, New Jersey 07065
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                            <li>
                                <p>
                                    Microporous Filter Division<br />
                                    Circle Seal Development Corp.<br />
                                    P. O. Box 3666<br />
                                    Anaheim, California 92803
                                </p>
                            </li>
                        </ul>
                    </li>
                </div><!-- LEFT_COLUMN -->

                <div class="right-column">
                    <li>
                        <h3>Relief Valves</h3>
                        <ul>
                            <li>
                                <p>
                                    Circle Seal Products Co., Inc.<br />
                                    East Foothill Blvd & Craig Street<br />
                                    Pasadena, California 91107
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Pressure Gauges</h3>
                        <ul>
                            <li>
                                <p>
                                    Helicoid Gage Division<br />
                                    American Chain & Cable Co.<br />
                                    Connecticut Avenue & Hewitt Street<br />
                                    Bridgeport, Connecticut 06602
                                </p>
                            </li>
                            <li>
                                <p>
                                    United States Gauge Division<br />
                                    American Machine & Metals, Inc.<br />
                                    Sellersville, Pennsylvania 18960
                                </p>
                            </li>
                            <li>
                                <p>
                                    Marsh Instrument Co.<br />
                                    3501 Howard Street<br />
                                    Skokie, Illinois 60076
                                </p>
                            </li>
                            <li>
                                <p>
                                    Heise Bourdon Tube Co., Inc.<br />
                                    1 Brook Road<br />
                                    Newtown, Connecticut 06470
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>O-Rings</h3>
                        <ul>
                            <li>
                                <p>
                                    Parker Seal Co.<br />
                                    10567 Jefferson Blvd.<br /> 
                                    Culver City, California 90230
                                </p>
                            </li>
                            <li>
                                <p>
                                    Minnesota Rubber Co.<br />
                                    3628 Wooddale Avenue<br />
                                    Minneapolis, Minnesota 55416
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Crush Gaskets</h3>
                        <ul>
                            <li>
                                <p>
                                    Gasket Manufacturing Co., Inc.<br />
                                    319 West 17th Street<br />
                                    P. O. Box 15438<br />
                                    Los Angeles, California 90015
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Spray Nozzle</h3>
                        <ul>
                            <li>
                                <p>
                                    Delaval Manufacturing Co.<br />
                                    Grand Avenue & 4th Street<br />
                                    West Des Moines, Iowa 50265
                                </p>
                            </li>
                            <li>
                                <p>
                                    Spraying Systems Co.<br />
                                    3265 Randolph Street<br />
                                    Bellwood, Illinois  60104
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Tube Fittings</h3>
                        <ul>
                            <li>
                                <p>
                                    Parker Tube Fittings Division<br />
                                    Parker-Hannifin Corp.<br />
                                    17327 Euclid Avenue<br />
                                    Cleveland, Ohio 44112
                                </p>
                            </li>
                            <li>
                                <p>
                                    Imperial-Eastman Corp.<br />
                                    6300 West Howard Street<br />
                                    Chicago, Illinois 60648
                                </p>
                            </li>
                            <li>
                                <p>
                                    Featherhead Co.<br />
                                    320 East 131st Street<br />
                                    Cleveland, Ohio 44108
                                </p>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <h3>Gas Cylinder Fittings</h3>
                        <ul>
                            <li>
                                <p>
                                    Western Enterprises, Inc.<br />
                                    27360 West Oviatt Road<br />
                                    P. O. Box 9737<br />
                                    Bay Village, Ohio 44140
                                </p>
                            </li>
                            <li>
                                <p>
                                    Hoke Incorporated<br />
                                    10 Tenakill Park<br />
                                    Cresskill, New Jersey 07626
                                </p>
                            </li>
                        </ul>
                    </li>
                </div><!-- RIGHT-COLUMN -->
                <p style="clear: both;"></p>
            </ul>

            <!-- CH 14.0 -->
            <h1 id="conversion-factors">Conversion Factors</h1>

            <h4>TABLE V</h4>

            <!-- TABLE 5 -->
            <div id="table-5" class="responsive-table">
                <table class="table full-width">
                    <thead>
                        <tr>
                            <th>Multiply</th>
                            <th>by</th>
                            <th>To Obtain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Btu/minute</td>
                            <td>0.02356</td>
                            <td>Horsepower</td>
                        </tr>
                        <tr>
                            <td>Btu/minute</td>
                            <td>17.57</td>
                            <td>Watts</td>
                        </tr>
                        <tr>
                            <td>Cubic feet</td>
                            <td>1728</td>
                            <td>Cubic inches</td>
                        </tr>
                        <tr>
                            <td>Cubic feet</td>
                            <td>7.48052</td>
                            <td>Gallons</td>
                        </tr>
                        <tr>
                            <td>Feet</td>
                            <td>12</td>
                            <td>Inches</td>
                        </tr>
                        <tr>
                            <td>Gallons</td>
                            <td>0.1337</td>
                            <td>Cubic feet</td>
                        </tr>
                        <tr>
                            <td>Gallons</td>
                            <td>231</td>
                            <td>Cubic inches</td>
                        </tr>
                        <tr>
                            <td>Gallons water</td>
                            <td>8.3453</td>
                            <td>Pounds water</td>
                        </tr>
                        <tr>
                            <td>Miles</td>
                            <td>5280</td>
                            <td>Feet</td>
                        </tr>
                        <tr>
                            <td>Miles/hour</td>
                            <td>1.467</td>
                            <td>Feet/sec</td>
                        </tr>
                        <tr>
                            <td>Minute</td>
                            <td>60</td>
                            <td>Seconds</td>
                        </tr>
                        <tr>
                            <td>Pounds</td>
                            <td>16</td>
                            <td>Ounces</td>
                        </tr>
                        <tr>
                            <td>Pounds water</td>
                            <td>0.1198</td>
                            <td>Gallons</td>
                        </tr>
                        <tr>
                            <td>Square feet</td>
                            <td>144</td>
                            <td>Square inches</td>
                        </tr>
                        <tr>
                            <td>Temp (degC + 17.78)</td>
                            <td>1.8</td>
                            <td>Temp (degF)</td>
                        </tr>
                        <tr>
                            <td>Temp (degF + 460)</td>
                            <td>1</td>
                            <td>Abs. Temp (degR)</td>
                        </tr>
                        <tr>
                            <td>Temp (degF - 32)</td>
                            <td>5/9</td>
                            <td>Temp (degC)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- CH 15.0 -->
            <h1 id="additions">Additions</h1>

            <!-- CH 15.1 -->
            <h2 id="additions-and-corrections">Additions and Corrections</h2>

            <ul>
                <li>The Atlas is no longer a "missile" but has been converted into a "space
                launch vehicle".</li>
                
                <li>The calculation in the <a href="#propellant-choice">Propellant Choice</a>
                section assumes that there are no losses; i.e., that the "maximum theoretical"
                I<sub>sp</sub> will be that which is achieved. There are numerous loss terms not
                accounted for; hence the flowrate given is incorrect.</li>
                
                <li>Modern launch vehicles operate fuel rich as stated; however it is not due to a
                desire to reduce the combustion temperature. Rather, the kinetic losses
                (losses due to departure from full shifting equilibrium) are a maximum at
                stoichiometric; the prudent designer therefore selects a mixture ratio "off
                stoichiometric" in order to minimize the kinetic losses.</li>
                
                <li>The <a href="#safety">Safety</a> section, asserts that electrical
                instrumentation wherein a transducer is located on the test stand and an
                electrical readout is located on the operator's station is too expensive for
                most amateurs. This is no longer the case. Actuated valves, pressure
                transducers, etc. and analog-to-digital capture systems for personal computers
                are very reasonable in price. Furthermore, a computer based system can provide
                a complete sensor log for the entire run, that will be extremely valuable in
                diagnosing failure and evaluating performance.</li>
                
                <li>In the <a href="#example">example calculation</a>, I think there may be
                arithmetic errors in the calculation of the coolant flow gap. Readers are
                strongly encouraged to redo all calculations for themselves.</li>

                <li>
                    <p><strong>According to John F. Cox [sac10361@saclink.csus.edu]:</strong></p>
                    <p>There is a small technical error in the <a href="#heat-transfer">Heat Transfer</a>
                    section of the amateur rocket designer's text. At the end of this section
                    the author advises that:</p>

                        <blockquote>"Material failure is usually caused by either raising the wall
                        temperature on the gas side so as to weaken, melt, or damage the wall
                        material or by raising the wall temperature on the liquid coolant side
                        so as to vaporize the liquid next to the wall. The consequent failure is
                        caused because of the sharp temperature rise in the wall caused by
                        excessive heat transfer to the boiling coolant."</blockquote>

                        <p>Boiling is usually a good thing from the standpoint of heat
                        transfer. The author has it right that boiling usually increases the
                        heat transfer. Increased heat transfer, however, results in lowered
                        temperature. Think about that for a minute and it will become
                        obvious.</p>

                        <p>The problem with boiling in this application results from something
                        that is called alternately film boiling, jacket boiling, or <i>Liedenfrost</i>
                        boiling. The boiling rate becomes so intense that a layer of vapor is
                        established between the hot wall and the cool liquid. The heat transfer
                        properties of boiling liquid are really wonderful. The heat transfer
                        properties of gaseous vapor really suck. Once the vapor barrier is
                        established, whatever it is that is being cooled will likely melt.</p>

                </li>
            </ul>

            <!-- CH 15.2 -->
            <h2 id="other-notes">Other Notes</h2>

            <p>Reprinted with permission.</p>

            <p><strong>Daniel Risacher (1st www edition):</strong></p>
            <blockquote>
                <p>This book has been out of print and very hard to find for many years. For this
                reason, I decided to undertake the task of putting it into electronic media for
                wider dissemination. If you need to contact me about this book, please email me,
                Daniel Risacher, <u>magnus@alum.mit.edu</u>. However, I wish to reiterate that I am not the
                author of this book, nor am I an expert on rockets. This book was written by Leroy
                Krzycki, who, when I contacted him in 1995, had been retired for some time.</p>

                <p>The book was scanned from a copy provided to me by the generosity and foresight
                of Wayne Gramlich of Sun. Numerous errors were introduced by the scanning and OCR
                process that I and other volunteers removed by hand. Special thanks goes to Jim
                Glass of Rocketdyne for his outstanding efforts.</p>
            </blockquote>

            <p><strong>Miika Sikala (2nd www edition):</strong></p>
            <blockquote>
                <p>In 2018, 22 years after the first WWW edition, I decided to contribute and
                rewrite the whole book. It all started when I was studying for my personal
                project but reading the plain html-version was a bit tough job, especially with
                mobile device. So I started rewriting this with new styles. Of course, it
                eventually resulted a full overhaul including re-rendering all equations and
                redrawing the figures. I also checked equations and figures for errors and fixed
                them. And yeah, fixed <i>quite</i> many typos.</p>

                <p>I'm very grateful to Mr. Krzycki and Mr. Risacher for everything they have
                done to help future rocket engineers.</p>

                <p>If you have feedback or you have found errors, please contact me at:
                <u>miikasikala96@gmail.com</u>.</p>
            </blockquote>

            <div class="cover-image-container">
                <img src="img/cover.jpg" alt="cover">
            </div>

            <p class="thank-you"><i>Thank You.</i></p>

        </div>

        <BottomSticky :unitSystem="unitSystem" v-on:switch-units="switchUnits" />
    </div>

</template>
<script>

import { getEquations } from './../equations'

export default {
    data: () => ({
        unitSystem: 'SI',
        fullscreenImage: '',
        equations: {}
    }),
    methods: {
        switchUnits() {
            this.unitSystem = (this.unitSystem == 'SI') ? 'US' : 'SI'
        }
    },

    created() {
        this.equations = getEquations()
    }
}
</script>