/*
F = 445 N, I_sp = 996
w_t = F/I_sp
 */
const a = {
    "kgms-1": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-1}}`,
    "kgms-2": String.raw`\operatorname{kg}\cdot\operatorname{m}\cdot\operatorname{s^{-2}}`
}


const EQUATIONS = {
    "kgms-1":           a['kgms-1'],

    // Equations
    "of_ratio":         String.raw`O/F = \dot{w_o}/\dot{w_f}`,
    "isp":              String.raw`I_{sp} = \frac{\text{thrust}}{\text{total propellant weight flow rate}}`,
    "w_t":              { "US": String.raw`\dot{w_t} = F/I_{sp} = 100/244 = 0.41 \operatorname{lb}/\operatorname{sec}`,
                          "SI": String.raw`\dot{w_t} = F/I_{sp} = 445/244 = 1.824 \operatorname{N}/\operatorname{s}`},
    "m_t":              String.raw`\dot{m_t} = \dot{w_t} / g = 0.186 \operatorname{kg}/\operatorname{s}`,

    "w_o":              String.raw`\dot{w_o} = \dot{w_t}r/(r + 1) = 0.293 \operatorname{lb}/\operatorname{sec}`,
    "w_f":              String.raw`\dot{w_f} = \dot{w_t}/(r + 1) = 0.117 \operatorname{lb}/\operatorname{sec}`,
    "w_t2":             String.raw`\dot{w_t} = \dot{w_o} + \dot{w_f}`,

    "m_o":              String.raw`\dot{m_o} = \dot{m_t}r/(r + 1) = 0.133 \operatorname{kg}/\operatorname{s}`,
    "m_f":              String.raw`\dot{m_f} = \dot{m_t}/(r + 1) = 0.053 \operatorname{kg}/\operatorname{s}`,
    "m_t2":             String.raw`\dot{m_t} = \dot{m_o} + \dot{m_f}`,

    "A_t":              { "US": String.raw`A_t = \frac{\dot{w_t}}{P_t}\sqrt{RT/\gamma g_c}`,
                          "SI": String.raw`A_t = \frac{\dot{m_t}}{P_t}\sqrt{RT/\gamma}`},
    "T_t":              String.raw`T_t = T_c \left [ \frac{1}{ 1 + \frac{\gamma - 1}{2} } \right ]`,
    "T_t_val":          String.raw`T_t = (0.909)T_c`,

    "T_c_val":          { "US": String.raw`T(°R) = T(°F) + 460`,
                          "SI": String.raw`T(K) = T(°C) + 273.15`},
    "P_t":              String.raw`P_t = P_c \left [ 1 + \frac{\gamma - 1}{ 2 } \right ]^{ -\frac{\gamma}{\gamma - 1} }`,
    "P_t_val":          String.raw`P_t = (0.564)P_c`,

    "M_e2":             String.raw`M_e^2 = \frac{2}{\gamma - 1} \left [ \left ( \frac{P_c}{P_{atm}} \right ) ^{\frac{\gamma - 1}{\gamma}} - 1 \right ]`,
    "A_e":              String.raw`A_e = \frac{A_t}{M_e} \left [ \frac{ 1 + \frac{\gamma - 1}{2} M_e^2 }{ (\gamma + 1) / 2 } \right ]^{ \frac{\gamma + 1}{2(\gamma - 1)} }`,

    "A_e2":             String.raw`A_e = A_t (A_e / A_t)`,
    "T_e":              String.raw`T_e = T_c (T_e / T_c)`,
    "D_t":              String.raw`D_t = \sqrt{4A_t / \pi}`,
    "D_e":              String.raw`D_e = \sqrt{4A_e / \pi}`,

    "L_star":           String.raw`L^* = V_c / A_t`,
    "A_c":              String.raw`A_c = \pi D_c^2 / 4`,
    "V_c1":            String.raw`V_c = A_c L_c + \text{convergent volume}`,
    "V_c2":            String.raw`V_c = 1.1(A_c L_c)`,
}

export const getEquations = () => EQUATIONS;