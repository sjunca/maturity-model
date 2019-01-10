<template>
    <div class="form-information">
        <div class="row-holder">
            <div class="group-form">
                <label for="firstname">First Name<span style="color:#9a0000">*</span></label>
                <input type="text" name="firstname" :value="pardotinfo.firstname" v-on:keyup.stop="updateField('firstname', $event.target.value)" />
            </div>
            <div class="group-form">
                <label for="lasttname">Last Name<span style="color:#9a0000">*</span></label>
                <input type="text" name="lastname" :value="pardotinfo.lastname" v-on:keyup.stop="updateField('lastname', $event.target.value)" />
            </div>
        </div>
        <div class="row-holder">
            <div class="group-form">
                <label for="email">Email<span style="color:#9a0000">*</span></label>
                <input type="email" name="email" :value="pardotinfo.email" v-on:keyup.stop="updateField('email', $event.target.value)" />
            </div>
            <div class="group-form">
                <label for="phone">Business Phone<span style="color:#9a0000">*</span></label>
                <input type="tel" name="phone" :value="pardotinfo.phone" v-on:keyup.stop="updateField('phone', $event.target.value)" />
            </div>
        </div>
        <div class="row-holder">
            <div class="group-form">
                <label for="company">Company<span style="color:#9a0000">*</span></label>
                <input type="text" name="company" :value="pardotinfo.company" v-on:keyup.stop="updateField('company', $event.target.value)" />
            </div>
            <div class="group-form">
                <label for="jobtitle">Job Title<span style="color:#9a0000">*</span></label>
                <input type="text" name="jobtitle" :value="pardotinfo.jobtitle" v-on:keyup.stop="updateField('jobtitle', $event.target.value)" />
            </div>
        </div>
        <div class="row-holder">
            <div class="group-form">
                <label for="industry">Industry<span style="color:#9a0000">*</span></label>
                <select id="industry" name="industry" v-model="pardotinfo.industry" v-on:keyup.stop="updateField('industry', $event.target.value)" >
                <option></option>
                <option v-model="pardotinfo.industry" value="A&D">Aerospace & Defense</option>
                <option v-model="pardotinfo.industry" value="Auto">Automotive</option>
                <option v-model="pardotinfo.industry" value="Bus. Services">Business Services</option>
                <option v-model="pardotinfo.industry" value="Chemicals">Chemicals</option>
                <option v-model="pardotinfo.industry" value="Construction Manufacturing">Construction / Manufacturing</option>
                <option v-model="pardotinfo.industry" value="Diversified Industrials">Diversified Industrials</option>
                <option v-model="pardotinfo.industry" value="Financial">Financial</option>
                <option v-model="pardotinfo.industry" value="Government">Government</option>
                <option v-model="pardotinfo.industry" value="Healthcare">Healthcare</option>
                <option v-model="pardotinfo.industry" value="Marine & Trade">Marine & Trade</option>
                <option v-model="pardotinfo.industry" value="Natural Resources">Natural Resources</option>
                <option v-model="pardotinfo.industry" value="Oil & Gas">Oil & Gas</option>
                <option v-model="pardotinfo.industry" value="Power &amp; Utility">Power &amp; Utility</option>
                <option v-model="pardotinfo.industry" value="Technology">Technology</option>
                <option v-model="pardotinfo.industry" value="Other">Other</option>
            </select>
            </div>
            <div class="group-form">
                <label for="country">Country<span style="color:#9a0000">*</span></label>
                <select class="country-select" name="country" id="country" v-model="pardotinfo.country" v-on:keyup.stop="updateField('country', $event.target.value);" v-on:change="countryGDPR()" >
                    <option v-model="pardotinfo.country" value=""></option>
                    <option v-model="pardotinfo.country" value="Afganistan">Afghanistan</option>
                    <option v-model="pardotinfo.country" value="Aland Islands">Aland Islands</option>
                    <option v-model="pardotinfo.country" value="Albania">Albania</option>
                    <option v-model="pardotinfo.country" value="Algeria">Algeria</option>
                    <option v-model="pardotinfo.country" value="Andorra">Andorra</option>
                    <option v-model="pardotinfo.country" value="Angola">Angola</option>
                    <option v-model="pardotinfo.country" value="Anguilla">Anguilla</option>
                    <option v-model="pardotinfo.country" value="Antarctica">Antarctica</option>
                    <option v-model="pardotinfo.country" value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                    <option v-model="pardotinfo.country" value="Argentina">Argentina</option>
                    <option v-model="pardotinfo.country" value="Armenia">Armenia</option>
                    <option v-model="pardotinfo.country" value="Aruba">Aruba</option>
                    <option v-model="pardotinfo.country" value="Australia">Australia</option>
                    <option v-model="pardotinfo.country" value="Austria">Austria</option>
                    <option v-model="pardotinfo.country" value="Azerbaijan">Azerbaijan</option>
                    <option v-model="pardotinfo.country" value="Bahamas">Bahamas</option>
                    <option v-model="pardotinfo.country" value="Bahrain">Bahrain</option>
                    <option v-model="pardotinfo.country" value="Bangladesh">Bangladesh</option>
                    <option v-model="pardotinfo.country" value="Barbados">Barbados</option>
                    <option v-model="pardotinfo.country" value="Belarus">Belarus</option>
                    <option v-model="pardotinfo.country" value="Belgium">Belgium</option>
                    <option v-model="pardotinfo.country" value="Belize">Belize</option>
                    <option v-model="pardotinfo.country" value="Benin">Benin</option>
                    <option v-model="pardotinfo.country" value="Bermuda">Bermuda</option>
                    <option v-model="pardotinfo.country" value="Bhutan">Bhutan</option>
                    <option v-model="pardotinfo.country" value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                    <option v-model="pardotinfo.country" value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                    <option v-model="pardotinfo.country" value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                    <option v-model="pardotinfo.country" value="Botswana">Botswana</option>
                    <option v-model="pardotinfo.country" value="Bouvet Island">Bouvet Island</option>
                    <option v-model="pardotinfo.country" value="Brazil">Brazil</option>
                    <option v-model="pardotinfo.country" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option v-model="pardotinfo.country" value="Brunei Darussalam">Brunei Darussalam</option>
                    <option v-model="pardotinfo.country" value="Bulgaria">Bulgaria</option>
                    <option v-model="pardotinfo.country" value="Burkina Faso">Burkina Faso</option>
                    <option v-model="pardotinfo.country" value="Burundi">Burundi</option>
                    <option v-model="pardotinfo.country" value="Cambodia">Cambodia</option>
                    <option v-model="pardotinfo.country" value="Cameroon">Cameroon</option>
                    <option v-model="pardotinfo.country" value="Canada">Canada</option>
                    <option v-model="pardotinfo.country" value="Cape Verde">Cape Verde</option>
                    <option v-model="pardotinfo.country" value="Cayman Islands">Cayman Islands</option>
                    <option v-model="pardotinfo.country" value="Central African Republic">Central African Republic</option>
                    <option v-model="pardotinfo.country" value="Chad">Chad</option>
                    <option v-model="pardotinfo.country" value="Chile">Chile</option>
                    <option v-model="pardotinfo.country" value="China">China</option>
                    <option v-model="pardotinfo.country" value="Chinese Taipei">Chinese Taipei</option>
                    <option v-model="pardotinfo.country" value="Christmas Island">Christmas Island</option>
                    <option v-model="pardotinfo.country" value="Cocos (Keeling) Island">Cocos (Keeling) Island</option>
                    <option v-model="pardotinfo.country" value="Colombia">Colombia</option>
                    <option v-model="pardotinfo.country" value="Comoros">Comoros</option>
                    <option v-model="pardotinfo.country" value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                    <option v-model="pardotinfo.country" value="Cook Islands">Cook Islands</option>
                    <option v-model="pardotinfo.country" value="Costa Rica">Costa Rica</option>
                    <option v-model="pardotinfo.country" value="Cote DIvoire">Cote D'Ivoire</option>
                    <option v-model="pardotinfo.country" value="Croatia">Croatia</option>
                    <option v-model="pardotinfo.country" value="Cuba">Cuba</option>
                    <option v-model="pardotinfo.country" value="Curaco">Curacao</option>
                    <option v-model="pardotinfo.country" value="Cyprus">Cyprus</option>
                    <option v-model="pardotinfo.country" value="Czech Republic">Czech Republic</option>
                    <option v-model="pardotinfo.country" value="Denmark">Denmark</option>
                    <option v-model="pardotinfo.country" value="Djibouti">Djibouti</option>
                    <option v-model="pardotinfo.country" value="Dominica">Dominica</option>
                    <option v-model="pardotinfo.country" value="Dominican Republic">Dominican Republic</option>
                    <option v-model="pardotinfo.country" value="Ecuador">Ecuador</option>
                    <option v-model="pardotinfo.country" value="Egypt">Egypt</option>
                    <option v-model="pardotinfo.country" value="El Salvador">El Salvador</option>
                    <option v-model="pardotinfo.country" value="Equatorial Guinea">Equatorial Guinea</option>
                    <option v-model="pardotinfo.country" value="Eritrea">Eritrea</option>
                    <option v-model="pardotinfo.country" value="Estonia">Estonia</option>
                    <option v-model="pardotinfo.country" value="Ethiopia">Ethiopia</option>
                    <option v-model="pardotinfo.country" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                    <option v-model="pardotinfo.country" value="Faroe Islands">Faroe Islands</option>
                    <option v-model="pardotinfo.country" value="Fiji">Fiji</option>
                    <option v-model="pardotinfo.country" value="Finland">Finland</option>
                    <option v-model="pardotinfo.country" value="France">France</option>
                    <option v-model="pardotinfo.country" value="French Guiana">French Guiana</option>
                    <option v-model="pardotinfo.country" value="French Polynesia">French Polynesia</option>
                    <option v-model="pardotinfo.country" value="French Southern Territories">French Southern Territories</option>
                    <option v-model="pardotinfo.country" value="Gabon">Gabon</option>
                    <option v-model="pardotinfo.country" value="Gambia">Gambia</option>
                    <option v-model="pardotinfo.country" value="Georgia">Georgia</option>
                    <option v-model="pardotinfo.country" value="Germany">Germany</option>
                    <option v-model="pardotinfo.country" value="Ghana">Ghana</option>
                    <option v-model="pardotinfo.country" value="Gibraltar">Gibraltar</option>
                    <option v-model="pardotinfo.country" value="Greece">Greece</option>
                    <option v-model="pardotinfo.country" value="Greenland">Greenland</option>
                    <option v-model="pardotinfo.country" value="Grenada">Grenada</option>
                    <option v-model="pardotinfo.country" value="Guadeloupe">Guadeloupe</option>
                    <option v-model="pardotinfo.country" value="Guatemala">Guatemala</option>
                    <option v-model="pardotinfo.country" value="Guernsey">Guernsey</option>
                    <option v-model="pardotinfo.country" value="Guinea">Guinea</option>
                    <option v-model="pardotinfo.country" value="Guinea-Bissau">Guinea-Bissau</option>
                    <option v-model="pardotinfo.country" value="Guyana">Guyana</option>
                    <option v-model="pardotinfo.country" value="Haiti">Haiti</option>
                    <option v-model="pardotinfo.country" value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                    <option v-model="pardotinfo.country" value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                    <option v-model="pardotinfo.country" value="Honduras">Honduras</option>
                    <option v-model="pardotinfo.country" value="Hong Kong">Hong Kong</option>
                    <option v-model="pardotinfo.country" value="Hungary">Hungary</option>
                    <option v-model="pardotinfo.country" value="Iceland">Iceland</option>
                    <option v-model="pardotinfo.country" value="India">India</option>
                    <option v-model="pardotinfo.country" value="Indonesia">Indonesia</option>
                    <option v-model="pardotinfo.country" value="Iran, Islamic Republic of">Iran, Islamic Republic of, Islamic Republic of</option>
                    <option v-model="pardotinfo.country" value="Iraq">Iraq</option>
                    <option v-model="pardotinfo.country" value="Ireland">Ireland</option>
                    <option v-model="pardotinfo.country" value="Isle of Man">Isle of Man</option>
                    <option v-model="pardotinfo.country" value="Israel">Israel</option>
                    <option v-model="pardotinfo.country" value="Italy">Italy</option>
                    <option v-model="pardotinfo.country" value="Jamaica">Jamaica</option>
                    <option v-model="pardotinfo.country" value="Japan">Japan</option>
                    <option v-model="pardotinfo.country" value="Jersey">Jersey</option>
                    <option v-model="pardotinfo.country" value="Jordan">Jordan</option>
                    <option v-model="pardotinfo.country" value="Kazakhstan">Kazakhstan</option>
                    <option v-model="pardotinfo.country" value="Kenya">Kenya</option>
                    <option v-model="pardotinfo.country" value="Kiribati">Kiribati</option>
                    <option v-model="pardotinfo.country" value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                    <option v-model="pardotinfo.country" value="Korea, Republic of">Korea, Republic of</option>
                    <option v-model="pardotinfo.country" value="Kuwait">Kuwait</option>
                    <option v-model="pardotinfo.country" value="Kyrgyzstan">Kyrgyzstan</option>
                    <option v-model="pardotinfo.country" value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                    <option v-model="pardotinfo.country" value="Latvia">Latvia</option>
                    <option v-model="pardotinfo.country" value="Lebanon">Lebanon</option>
                    <option v-model="pardotinfo.country" value="Lesotho">Lesotho</option>
                    <option v-model="pardotinfo.country" value="Liberia">Liberia</option>
                    <option v-model="pardotinfo.country" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option v-model="pardotinfo.country" value="Liechtenstein">Liechtenstein</option>
                    <option v-model="pardotinfo.country" value="Lithuania">Lithuania</option>
                    <option v-model="pardotinfo.country" value="Luxembourg">Luxembourg</option>
                    <option v-model="pardotinfo.country" value="Macau">Macau</option>
                    <option v-model="pardotinfo.country" value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
                    <option v-model="pardotinfo.country" value="Madagascar">Madagascar</option>
                    <option v-model="pardotinfo.country" value="Malawi">Malawi</option>
                    <option v-model="pardotinfo.country" value="Malaysia">Malaysia</option>
                    <option v-model="pardotinfo.country" value="Maldives">Maldives</option>
                    <option v-model="pardotinfo.country" value="Mali">Mali</option>
                    <option v-model="pardotinfo.country" value="Malta">Malta</option>
                    <option v-model="pardotinfo.country" value="Martinique">Martinique</option>
                    <option v-model="pardotinfo.country" value="Mauritania">Mauritania</option>
                    <option v-model="pardotinfo.country" value="Mauritius">Mauritius</option>
                    <option v-model="pardotinfo.country" value="Mayotte">Mayotte</option>
                    <option v-model="pardotinfo.country" value="Mexico">Mexico</option>
                    <option v-model="pardotinfo.country" value="Moldova, Republic of">Moldova, Republic of</option>
                    <option v-model="pardotinfo.country" value="Monaco">Monaco</option>
                    <option v-model="pardotinfo.country" value="Mongolia">Mongolia</option>
                    <option v-model="pardotinfo.country" value="Montenegro">Montenegro</option>
                    <option v-model="pardotinfo.country" value="Montserrat">Montserrat</option>
                    <option v-model="pardotinfo.country" value="Morocco">Morocco</option>
                    <option v-model="pardotinfo.country" value="Mozambique">Mozambique</option>
                    <option v-model="pardotinfo.country" value="Myanmar">Myanmar</option>
                    <option v-model="pardotinfo.country" value="Nambia">Nambia</option>
                    <option v-model="pardotinfo.country" value="Nauru">Nauru</option>
                    <option v-model="pardotinfo.country" value="Nepal">Nepal</option>
                    <option v-model="pardotinfo.country" value="Netherlands">Netherlands</option>
                    <option v-model="pardotinfo.country" value="New Caledonia">New Caledonia</option>
                    <option v-model="pardotinfo.country" value="New Zealand">New Zealand</option>
                    <option v-model="pardotinfo.country" value="Nicaragua">Nicaragua</option>
                    <option v-model="pardotinfo.country" value="Niger">Niger</option>
                    <option v-model="pardotinfo.country" value="Nigeria">Nigeria</option>
                    <option v-model="pardotinfo.country" value="Niue">Niue</option>
                    <option v-model="pardotinfo.country" value="Norfolk Island">Norfolk Island</option>
                    <option v-model="pardotinfo.country" value="Norway">Norway</option>
                    <option v-model="pardotinfo.country" value="Oman">Oman</option>
                    <option v-model="pardotinfo.country" value="Pakistan">Pakistan</option>
                    <option v-model="pardotinfo.country" value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                    <option v-model="pardotinfo.country" value="Panama">Panama</option>
                    <option v-model="pardotinfo.country" value="Papua New Guinea">Papua New Guinea</option>
                    <option v-model="pardotinfo.country" value="Paraguay">Paraguay</option>
                    <option v-model="pardotinfo.country" value="Peru">Peru</option>
                    <option v-model="pardotinfo.country" value="Phillipines">Philippines</option>
                    <option v-model="pardotinfo.country" value="Pitcairn">Pitcairn</option>
                    <option v-model="pardotinfo.country" value="Poland">Poland</option>
                    <option v-model="pardotinfo.country" value="Portugal">Portugal</option>
                    <option v-model="pardotinfo.country" value="Puerto Rico">Puerto Rico</option>
                    <option v-model="pardotinfo.country" value="Qatar">Qatar</option>
                    <option v-model="pardotinfo.country" value="Reunion">Reunion</option>
                    <option v-model="pardotinfo.country" value="Romania">Romania</option>
                    <option v-model="pardotinfo.country" value="Russian Federation">Russian Federation</option>
                    <option v-model="pardotinfo.country" value="Rwanda">Rwanda</option>
                    <option v-model="pardotinfo.country" value="St Barthelemy">St Barthelemy</option>
                    <option v-model="pardotinfo.country" value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option v-model="pardotinfo.country" value="Saint Kitts-Nevis">Saint Kitts-Nevis</option>
                    <option v-model="pardotinfo.country" value="Saint Lucia">Saint Lucia</option>
                    <option v-model="pardotinfo.country" value="Saint Martin (French part)">Saint Martin (French part)</option>
                    <option v-model="pardotinfo.country" value="Saint Pierre &amp; Miquelon">Saint Pierre &amp; Miquelon</option>
                    <option v-model="pardotinfo.country" value="Saint Vincent &amp; Grenadines">Saint Vincent &amp; Grenadines</option>
                    <option v-model="pardotinfo.country" value="Samoa">Samoa</option>
                    <option v-model="pardotinfo.country" value="San Marino">San Marino</option>
                    <option v-model="pardotinfo.country" value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                    <option v-model="pardotinfo.country" value="Saudi Arabia">Saudi Arabia</option>
                    <option v-model="pardotinfo.country" value="Senegal">Senegal</option>
                    <option v-model="pardotinfo.country" value="Serbia">Serbia</option>
                    <option v-model="pardotinfo.country" value="Seychelles">Seychelles</option>
                    <option v-model="pardotinfo.country" value="Sierra Leone">Sierra Leone</option>
                    <option v-model="pardotinfo.country" value="Singapore">Singapore</option>
                    <option v-model="pardotinfo.country" value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                    <option v-model="pardotinfo.country" value="Slovakia">Slovakia</option>
                    <option v-model="pardotinfo.country" value="Slovenia">Slovenia</option>
                    <option v-model="pardotinfo.country" value="Solomon Islands">Solomon Islands</option>
                    <option v-model="pardotinfo.country" value="Somalia">Somalia</option>
                    <option v-model="pardotinfo.country" value="South Africa">South Africa</option>
                    <option v-model="pardotinfo.country" value="South Georgia and South Sandwich Islands">South Georgia and South Sandwich Is.</option>
                    <option v-model="pardotinfo.country" value="South Sudan">South Sudan</option>
                    <option v-model="pardotinfo.country" value="Spain">Spain</option>
                    <option v-model="pardotinfo.country" value="Sri Lanka">Sri Lanka</option>
                    <option v-model="pardotinfo.country" value="Sudan">Sudan</option>
                    <option v-model="pardotinfo.country" value="Suriname">Suriname</option>
                    <option v-model="pardotinfo.country" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option v-model="pardotinfo.country" value="Swaziland">Swaziland</option>
                    <option v-model="pardotinfo.country" value="Sweden">Sweden</option>
                    <option v-model="pardotinfo.country" value="Switzerland">Switzerland</option>
                    <option v-model="pardotinfo.country" value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option v-model="pardotinfo.country" value="Taiwan">Taiwan</option>
                    <option v-model="pardotinfo.country" value="Tajikistan">Tajikistan</option>
                    <option v-model="pardotinfo.country" value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                    <option v-model="pardotinfo.country" value="Thailand">Thailand</option>
                    <option v-model="pardotinfo.country" value="Timor-Leste">Timor-Leste</option>
                    <option v-model="pardotinfo.country" value="Togo">Togo</option>
                    <option v-model="pardotinfo.country" value="Tokelau">Tokelau</option>
                    <option v-model="pardotinfo.country" value="Tonga">Tonga</option>
                    <option v-model="pardotinfo.country" value="Trinidad and Tobago">Trinidad &amp; Tobago</option>
                    <option v-model="pardotinfo.country" value="Tunisia">Tunisia</option>
                    <option v-model="pardotinfo.country" value="Turkey">Turkey</option>
                    <option v-model="pardotinfo.country" value="Turkmenistan">Turkmenistan</option>
                    <option v-model="pardotinfo.country" value="Turks and Caicos Islands">Turks &amp; Caicos Is</option>
                    <option v-model="pardotinfo.country" value="Tuvalu">Tuvalu</option>
                    <option v-model="pardotinfo.country" value="Uganda">Uganda</option>
                    <option v-model="pardotinfo.country" value="Ukraine">Ukraine</option>
                    <option v-model="pardotinfo.country" value="United Arab Emirates">United Arab Emirates</option>
                    <option v-model="pardotinfo.country" value="United Kingdom">United Kingdom</option>
                    <option v-model="pardotinfo.country" value="United States">United States</option>
                    <option v-model="pardotinfo.country" value="Uraguay">Uruguay</option>
                    <option v-model="pardotinfo.country" value="Uzbekistan">Uzbekistan</option>
                    <option v-model="pardotinfo.country" value="Vanuatu">Vanuatu</option>
                    <option v-model="pardotinfo.country" value="Venezuela">Venezuela</option>
                    <option v-model="pardotinfo.country" value="Vietnam">Vietnam</option>
                    <option v-model="pardotinfo.country" value="Virgin Islands, British">Virgin Islands, British</option>
                    <option v-model="pardotinfo.country" value="Wallis and Futana">Wallis &amp; Futana Is</option>
                    <option v-model="pardotinfo.country" value="Western Sahara">Western Sahara</option>
                    <option v-model="pardotinfo.country" value="Yemen">Yemen</option>
                    <option v-model="pardotinfo.country" value="Zambia">Zambia</option>
                    <option v-model="pardotinfo.country" value="Zimbabwe">Zimbabwe</option>
                </select>

            </div>
        </div>
        <div class="row-holder gdpr-holder" v-show="GDPRcountry">
            <input type="checkbox" v-model="pardotinfo.GDPR" />
            <label for="country"><p>Yes, I would like to receive content & communications regarding Sphera products, services, and events. I can <a href="http://insights.spherasolutions.com/preferences" target="_blank">unsubscribe</a> at any time or view our <a href="https://sphera.com/data-processing-policy/" target="_blank">data processing policy. </a> <a href="https://sphera.com/data-subject-access-rights/" target="_blank">Exercise your Data Subject Rights.</a><span style="color:#9a0000">*</span></p></label>
        </div>
        <div class="row-holder">
            <div class="group-form revenue-group-form">
                <label for="revenue">Annual Revenue</label>
                <select id="revenue" name="revenue" v-model="pardotinfo.revenue" v-on:keyup.stop="updateField('revenue', $event.target.value)">
                    <option v-model="pardotinfo.revenue" value="unknown"></option>
                    <option v-model="pardotinfo.revenue" value="1000000">&#60; $100 Million</option>
                    <option v-model="pardotinfo.revenue" value="100000000">$100-250 Million</option>
                    <option v-model="pardotinfo.revenue" value="250000000">$250-500 Million</option>
                    <option v-model="pardotinfo.revenue" value="500000000">$500-750 Million</option>
                    <option v-model="pardotinfo.revenue" value="750000000">$750 Million - 1 Billion</option>
                    <option v-model="pardotinfo.revenue" value="1000000000">&#62; $1 Billion</option>
                </select>
            </div>
        </div>
        <div class="row-holder">
            <div class="group-form">
                <label for="message">Message</label>
                <textarea name="message" :value="pardotinfo.message" v-on:keyup.stop="updateField('message', $event.target.value)" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "full-pardot-form",
        data() {
            return {
                pardotinfo: this.$store.state.pardotinfo,
                GDPRcountry: false
            }
        },
        methods: {
            updateField(field, value) {
                this.$store.commit('updatePardotInfo', {
                    [field]: value
                });
            },
            countryGDPR() {
                var countryList = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom'];
                if (countryList.indexOf(this.pardotinfo.country)  > -1) {
                    this.pardotinfo.GDPRswitch = true;
                    this.GDPRcountry = true;
                    this.pardotinfo.GDPR = false;
                } else {
                    this.GDPRcountry = false;
                    this.pardotinfo.GDPR = true;
                    this.pardotinfo.GDPRswitch = false;
                }
            }
        },
        watch: {
            pardotinfo: function(val) {
                console.log('watch change');
                this.countryGDPR(val);
                this.GDPRcountry = true;
            }
        }
    }
</script>

<style scoped>
    .form-information {
        width: 490px;
        max-width: 100%;
        border-radius: 10px;
        box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
        background: #fff;
        padding: 25px;
        margin: 20px auto;
    }
    label {
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
    }
    .row-holder {
        display: block;
        width: 440px;
        max-width: 100%;
        margin: 10px auto;
    }
    .row-holder .group-form {
        display: inline-block;
        vertical-align: top;
        margin: 0 10px;
    }
    .row-holder .revenue-group-form select, .row-holder .revenue-group-form {
        display: block;
        width: 420px;
        max-width: 100%;
    }
    input, select, textarea {
        width: 200px;
        padding: 8px 5px;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,0.15);
        background: rgba(0, 155, 222, 0.05);
    }
    textarea {
        display: block;
        width: 420px;
        max-width: 100%;
        padding: 10px;
        height: 150px;
    }
    .gdpr-holder {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 95%;
        margin: 20px auto;
        padding: 10px 0;
        border-top: 3px solid rgba(0,0,0,0.15);
    }
    .gdpr-holder input {
        width: 20px;
    }
    .gdpr-holder label {
        width: calc(100% - 30px);
        margin: 0 0 10px 10px;
        font-weight: normal;
        font-size: 14px;
    }
</style>
