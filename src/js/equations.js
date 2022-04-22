/*
F = 445 N, I_sp = 996
w_t = F/I_sp
 */
const a = {
	"kgms-1": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-1}}`,
	"kgms-2": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-2}}`
}

export const getEquations = () => ({
"kgms-1": 			a['kgms-1'],

// Equations
"of_ratio": 		String.raw`\tag{1} O/F = w_o/w_f`,
"isp": 				String.raw`\tag{2} I_{sp} = \frac{\text{thrust}}{\text{total propellant weight flow rate}}`,
"w_t": 				{ "US": String.raw`\tag{3} \dot{w_t} = F/I_{sp} = 100/244 = 0.41 \operatorname{lb}/\operatorname{sec}`,
					  "SI": String.raw`\tag{3} \dot{w_t} = F/I_{sp} = 445/244 = 1.824 \operatorname{N}/\operatorname{s}`},
"m_t": 				String.raw`\dot{m_t} = \dot{w_t} / g = 0.186 \operatorname{kg}/\operatorname{s}`,

"w_o": 				String.raw`\tag{4} \dot{w_o} = \dot{w_t}r/(r + 1) = 0.293 \operatorname{lb}/\operatorname{sec}`,
"w_f": 				String.raw`\tag{5} \dot{w_f} = \dot{w_t}/(r + 1) = 0.117 \operatorname{lb}/\operatorname{sec}`,
"w_t2": 			String.raw`\tag{6} \dot{w_t} = \dot{w_o} + \dot{w_f}`,

"m_o": 				String.raw`\tag{4} \dot{m_o} = \dot{m_t}r/(r + 1) = 0.133 \operatorname{kg}/\operatorname{s}`,
"m_f": 				String.raw`\tag{5} \dot{m_f} = \dot{m_t}/(r + 1) = 0.053 \operatorname{kg}/\operatorname{s}`,
"m_t2": 			String.raw`\tag{6} \dot{m_t} = \dot{m_o} + \dot{m_f}`,
})