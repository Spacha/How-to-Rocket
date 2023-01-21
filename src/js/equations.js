/*
F = 445 N, I_sp = 996
w_t = F/I_sp
 */
const a = {
    "kgms-1": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-1}}`,
    "kgms-2": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-2}}`
}

export const getEquations = () => ({
"kgms-1":           a['kgms-1'],

// Equations
"of_ratio":         String.raw`\tag{1} O/F = \dot{w_o}/\dot{w_f}`,
"isp":              String.raw`\tag{2} I_{sp} = \frac{\text{thrust}}{\text{total propellant weight flow rate}}`,
"w_t":              { "US": String.raw`\tag{3} \dot{w_t} = F/I_{sp} = 100/244 = 0.41 \operatorname{lb}/\operatorname{sec}`,
                      "SI": String.raw`\tag{3} \dot{w_t} = F/I_{sp} = 445/244 = 1.824 \operatorname{N}/\operatorname{s}`},
"m_t":              String.raw`\dot{m_t} = \dot{w_t} / g = 0.186 \operatorname{kg}/\operatorname{s}`,

"w_o":              String.raw`\tag{4} \dot{w_o} = \dot{w_t}r/(r + 1) = 0.293 \operatorname{lb}/\operatorname{sec}`,
"w_f":              String.raw`\tag{5} \dot{w_f} = \dot{w_t}/(r + 1) = 0.117 \operatorname{lb}/\operatorname{sec}`,
"w_t2":             String.raw`\tag{6} \dot{w_t} = \dot{w_o} + \dot{w_f}`,

"m_o":              String.raw`\tag{4} \dot{m_o} = \dot{m_t}r/(r + 1) = 0.133 \operatorname{kg}/\operatorname{s}`,
"m_f":              String.raw`\tag{5} \dot{m_f} = \dot{m_t}/(r + 1) = 0.053 \operatorname{kg}/\operatorname{s}`,
"m_t2":             String.raw`\tag{6} \dot{m_t} = \dot{m_o} + \dot{m_f}`,

"A_t":              { "US": String.raw`\tag{7} A_t = \frac{\dot{w_t}}{P_t}\sqrt{RT/\gamma g_c}`,
                      "SI": String.raw`\tag{7} A_t = \frac{\dot{m_t}}{P_t}\sqrt{RT/\gamma}`},
"T_t":              String.raw`\tag{8} T_t = T_c \left [ \frac{1}{ 1 + \frac{\gamma - 1}{2} } \right ]`,
"T_t_val":          String.raw`\tag{9} T_t = (0.909)T_c`,

"T_c_val":          { "US": String.raw`\tag{10} T(°R) = T(°F) + 460`,
                      "SI": String.raw`\tag{10} T(K) = T(°C) + 273.15`},
"P_t":              String.raw`\tag{11} P_t = P_c \left [ 1 + \frac{\gamma - 1}{ 2 } \right ]^{ -\frac{\gamma}{\gamma - 1} }`,
"P_t_val":          String.raw`\tag{12} P_t = (0.564)P_c`,

"M_e2":             String.raw`\tag{13} M_e^2 = \frac{2}{\gamma - 1} \left [ \left ( \frac{P_c}{P_{atm}} \right ) ^{\frac{\gamma - 1}{\gamma}} - 1 \right ]`,
"A_e":              String.raw`\tag{14} A_e = \frac{A_t}{M_e} \left [ \frac{ 1 + \frac{\gamma - 1}{2} M_e^2 }{ (\gamma + 1) / 2 } \right ]^{ \frac{\gamma + 1}{2(\gamma - 1)} }`,

"A_e2":             String.raw`\tag{15} A_e = A_t (A_e / A_t)`,
"T_e":              String.raw`\tag{16} T_e = T_c (T_e / T_c)`,
"D_t":              String.raw`\tag{17} D_t = \sqrt{4A_t / \pi}`,
"D_e":              String.raw`\tag{18} D_e = \sqrt{4A_e / \pi}`,

"L_star":           String.raw`\tag{19} L^* = V_c / A_t`,
"A_c":              String.raw`\tag{20} A_c = \pi D_c^2 / 4`,
"V_c-1":            String.raw`\tag{21} V_c = A_c L_c + \text{convergent volume}`,
"V_c-2":            String.raw`\tag{22} V_c = 1.1(A_c L_c)`,
})