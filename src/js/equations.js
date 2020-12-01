/*
F = 445 N, I_sp = 996
w_t = F/I_sp
 */
const a = {
	"kgms-1": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-1}}`
}

export const getEquations = () => ({
"kgms-1": 			a['kgms-1'],

// Equations
"of_ratio": 		String.raw`\tag{1} O/F = w_o/w_f`,
"isp": 				String.raw`\tag{2} I_{sp} = \frac{\text{thrust}}{\text{total propellant weight flow rate}}`,
"w_t": 				{ "US": String.raw`\tag{3} w_t = F/I_{sp} = 100/244 = 0.41 \operatorname{ lb}/\operatorname{sec}`,
					  "SI": String.raw`\tag{3} w_t = F/I_{sp} = 445/996 = 0.45 ` + a['kgms-1']}
})